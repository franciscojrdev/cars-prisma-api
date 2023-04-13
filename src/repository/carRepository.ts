// import db from "../config/database.js";

import client from "../config/database.js";

async function getCars() {
  return client.cars.findMany()
  
}

async function getCar(id: number) {
  return client.cars.findUnique({
    where:{
      id
    }
  })
}

async function getCarWithLicensePlate(licensePlate: string) {
  return client.cars.findUnique({
    where:{
      licensePlate
    }
  })
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  return client.cars.create({
    data:{
      model,
      licensePlate,
      year,
      color
    }
  })
}

async function deleteCar(id: number) {
  return client.cars.delete({
    where:{
      id
    }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;