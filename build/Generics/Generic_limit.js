"use strict";
//Ограничение generic
function kmToMile(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
function logId(id, add) {
    console.log(id);
    console.log(add);
    return { id, data: add };
}
//# sourceMappingURL=Generic_limit.js.map