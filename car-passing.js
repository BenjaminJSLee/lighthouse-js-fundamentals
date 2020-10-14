const carPassing = function (cars,speed) {
  const newCar = {
    speed: speed,
    time: Date.now()
  };
  cars.push(newCar);
  return cars;
};