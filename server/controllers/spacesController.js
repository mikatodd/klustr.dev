const db = require('../db/models');

const spacesController = {};

// CREATE TABLE "namespaces" (
//     "_id" smallserial PRIMARY KEY NOT NULL,
//     "name" varchar NOT NULL,
//     "team_id" smallint NOT NULL,
//     "project" varchar
//   );

spacesController.addNamespace = (req, res, next) => {
  console.log(req.body);
  const { namespace, team_id, project } = req.body;
  const params = [namespace, team_id, project];
  const query = `
  INSERT INTO namespaces2(name, team_id, project)
  VALUES ($1, $2, $3)`

  db.query(query, params)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in spacesController.addNamespace: ${err}` });
    })
}

module.exports = spacesController;