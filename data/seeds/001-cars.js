exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { vin: 12345, make: "Honda", model: "Civic", mileage: 8888 },
        { vin: 15497, make: "Ford", model: "Expedition", mileage: 9478 },
        { vin: 66778, make: "Audi", model: "A5", mileage: 3455 },
        { vin: 34971, make: "Acura", model: "TL", mileage: 124578 }
      ]);
    });
};
