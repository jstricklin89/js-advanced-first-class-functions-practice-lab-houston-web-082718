const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];
// // logDriverNames() 
const callback = function (value) {
  console.log(value.name);
};
const logDriverNames = function (array) {
  array.forEach(callback);
};
// // logDriversByHometown()
const logDriversByHometown = function (array, location) {
  array.forEach(function (value) {
    if (location === value.hometown) {
      console.log(value.name)
    }
  })
}
// // driversByRevenue() 
const driversByRevenue = function (array) {
  return  array.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  })
}
// // driversByName() 
const driversByName = function (array) {
  return array.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })
}
// // totalRevenue()
const totalRevenue = function (array) {
  return array.reduce(function (total, driver) {
      return total += driver.revenue
  }, 0)
} 
// // averageRevenue()
const averageRevenue = function (array) {
  return totalRevenue(array) / array.length
}