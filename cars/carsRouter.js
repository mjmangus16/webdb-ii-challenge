const express = require("express");

const db = require("../data/db-config");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/", (req, res) => {
  const carData = req.body;

  console.log(carData);

  db("cars")
    .insert(carData, "id")
    .then(cars => {
      const lastCar = cars[0];

      res.status(200).json(lastCar);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
