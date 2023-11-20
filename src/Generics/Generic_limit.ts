//Ограничение generic

interface VehicleGeneric {
  run: number
}
function kmToMile<T extends VehicleGeneric>(vehicle: T): T{ // ограничить джейнерик
  vehicle.run = vehicle.run / 0.62;
  return vehicle
}

function logId<T extends string | number, Y> (id: T, add: Y): {id: T, data: Y}{
  console.log(id)
  console.log(add)
  return {id, data: add}
}
