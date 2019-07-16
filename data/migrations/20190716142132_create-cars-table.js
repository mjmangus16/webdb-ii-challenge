exports.up = function(knex) {
  // we make changes to the db schema
  return knex.schema.createTable("cars", tbl => {
    // add a primary key named id, integer, auto-increment
    tbl.increments();

    // other columns
    tbl
      .integer("VIN")
      .unique()
      .notNullable();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.integer("mileage").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
