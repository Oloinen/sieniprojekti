const Pool = require("pg").Pool;
const conopts = {
  user: "postgres",
  password: "Sovelto1",
  host: "localhost",
  database: "sienikanta"
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
  const {finnishname, latinname, grouping, edible, ediblemarker, foundtime, location, environment, description} = req.body;
  pool.connect((err, client) => {
    client.query(
      "INSERT INTO sieni (finnishname, latinname, grouping, edible, ediblemarker, foundtime, location, environment, description) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)", [finnishname, latinname, grouping, edible, ediblemarker, foundtime, location, environment, description],
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
  const {finnishname, latinname, grouping, edible, ediblemarker, foundtime, location, environment, description} = req.body;
  const id = parseInt(req.params.id);
  if (!req.body.kaupunki) {
    pool.connect((err, client) => {
      client.query(
        "UPDATE users set nimi = $1, sposti = $2 where id = $3",
        [nimi, sposti, id],
        (err, data) => {
          client.release();
          callback("Käyttäjää möyhitty!");
        }
      );
    });
  } else {
    pool.connect((err, client) => {
      client.query(
        "UPDATE users set nimi = $1, sposti = $2, kaupunki = $3 where id = $4",
        [nimi, sposti, kaupunki, id],
        (err, data) => {
          client.release();
          callback("Käyttäjää möyhitty kunnolla!");
        }
      );
    });
  }
}

module.exports = { getSienet, getSieniById, createSieni, updateSieni, deleteSieni };
