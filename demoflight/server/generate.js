var faker = require('faker');

var database = { flights: []};

for (var i = 1; i<= 10; i++) {
  database.flights.push({
    id: i,
    name: faker.company.companyName(),
    flight_no:faker.random.number({min:100000,max:999999,precision:6}),
    price: faker.commerce.price(),
    start_time: faker.date.between('2015-01-01', '2015-12-31'),
    gate: faker.random.number({min:1,max:7,precision:1})
  });
}

console.log(JSON.stringify(database));