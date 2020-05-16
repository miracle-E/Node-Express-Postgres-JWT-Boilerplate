const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const config = require("./config");
const logger = require("./winston");

const db = {};

// connect to postgres db
const sequelize = new Sequelize(
  config.postgres.db,
  config.postgres.user,
  config.postgres.password,
  {
    dialect: "postgres",
    port: config.postgres.port,
    host: config.postgres.host,
  }
);

const modelsDir = path.normalize(`${__dirname}/../server/models`);

// loop through all files in models directory ignoring hidden files and this file
fs.readdirSync(modelsDir)
  .filter((file) => file.indexOf(".") !== 0 && file.indexOf(".map") === -1)
  // import model files and save model names
  .forEach((file) => {
    console.info(`Loading model file ${file}`);
    if (file !== "index.js") {
      const model = sequelize.import(path.join(modelsDir, file));
      db[model.name] = model;
    }
  });

// calling all the associate function, in order to make the association between the models
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

try {
  // Synchronizing any model changes with database.
  sequelize.sync().then((res) => {
    // if (err) logger.error("An error occured %j", err);
    // else 
    console.info("Database synchronized");
  }).catch(err => {
    logger.error(`An error occured ${err}`);
    console.error("An error occured %j", err);
  });
} catch (error) {
  console.log("Error : ", error);
}

// assign the sequelize variables to the db object and returning the db.
module.exports = _.extend(
  {
    sequelize,
    Sequelize,
  },
  db
);
