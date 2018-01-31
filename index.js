// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(d) {
    console.log(d.name);
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(d) {
    if (d.hometown === location) {
      console.log(d.name);
    }
  })
}

function driversByRevenue(drivers) {
  let newArr = [...drivers];
  return newArr.sort(function(a, b){
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers) {
  let newArr = [...drivers]
  return newArr.sort(function(a, b){
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function(total, d) {
    return total + d.revenue;
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
}
