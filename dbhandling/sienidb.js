const Pool = require("pg").Pool;
const conopts = {
  user: "postgres",
  password: "Sovelto1",
  host: "localhost",
  database: "sienikanta"
  /*user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  host: process.env.RDS_HOST,
  database: process.env.RDS_DATABASE*/
};
const pool = new Pool(conopts);

function getSienet(callback) {
  pool.connect((err, client) => {
    client.query("SELECT * FROM sieni", (err, data) => {
      client.release();
      callback(data.rows);
    });
  });
}

function getSieniById(req, callback) {
  pool.connect((err, client) => {
    client.query(
      "SELECT * FROM sieni where id = $1",
      [req.params.id],
      (err, data) => {
        client.release();
        callback(data.rows[0]);
      }
    );
  });
}

function createSieni(req, callback) {
  const {finnishname, latinname, grouping, edible, stars, foundtime, location, environment, description} = req.body;
  pool.connect((err, client) => {
    client.query(
      "INSERT INTO sieni (finnishname, latinname, grouping, edible, stars, foundtime, location, environment, description) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)", [finnishname, latinname, grouping, edible, stars, foundtime, location, environment, description],
      (err, data) => {
        client.release();
        callback(req.body);
      }
    );
  });
}

function deleteSieni(req, callback) {
  pool.connect((err, client) => {
    client.query(
      "DELETE FROM sieni WHERE id = $1",
      [req.params.id],
      (err, data) => {
        client.release();
        callback("Sieni likvidoitu!");
      }
    );
  });
}
function updateSieni(req, callback) {
  const {finnishname, latinname, grouping, edible, stars, foundtime, location, environment, description} = req.body;
  const id = parseInt(req.params.id);
  pool.connect((err, client) => {
      client.query(
        "UPDATE sieni set finnishname = $1, latinname = $2, grouping = $3, edible=$4, stars=$5, foundtime=$6, location=$7, environment=$8, description=$9 where id = $10",
        [finnishname, latinname, grouping, edible, stars, foundtime, location, environment, description, id],
        (err, data) => {
          client.release();
          callback("Sieni lisätty");
        }
      );
    });
}

module.exports = { getSienet, getSieniById, createSieni, updateSieni, deleteSieni };
