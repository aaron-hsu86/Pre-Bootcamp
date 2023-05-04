// Create function to check optimal distance to customer
var truckLocation = [0, 0]; // making truck start at the center of the map

function shortestDistanceToCust(custX, custY){
    // Convert Truck position to variables
    var truckX = truckLocation[0], truckY = truckLocation[1];
    var moveToX = truckX, moveToY = truckY;
    var destination = [2];
    // Calculate distance from customer - might remove
    var distX = custX - truckX, distY = custY - truckY;
    // if x/y distance is grater than 2, truck needs to move to 2 away from cust
    if (Math.abs(distX) > 2){
        if (distX > 0){ // Customer is to the truck's East, so move to the left of customer
            moveToX = custX - 2;
        } else {        // Customer is to the truck's West, so move to the right of the customer
            moveToX = custX + 2;
        }
    }
    if (Math.abs(distY) > 2){
        if (distY > 0){ // Customer is to the truck's North, so move to the left of customer
            moveToY = custY - 2;
        } else {        // Customer is to the truck's South, so move to the right of the customer
            moveToY = custY + 2;
        }
    }
    // if x/y distance is less than or equal to 2, no change is needed.

    // Move truck to new location
    truckLocation = [moveToX, moveToY];
    // Return optimal position for truck
    return destination [moveToX, moveToY]; // [finalX, finalY] position of truck
}


// if customer is at [3, 3], truck wants to get to [1,1]
shortestDistanceToCust(3, 3);
console.log(truckLocation); // truck should be in new position of [1,1]
// if cust is at [-3. -3], truck wants to move to [-1, -1] from [1,1]
shortestDistanceToCust(-3, -3);
console.log(truckLocation); // truck should have moved to new position of [-1, -1]
// New cust position of [5,0], truck should only move in X direction to [3, -1]
shortestDistanceToCust(5, 0);
console.log(truckLocation);
// New customer position of [-20, 15], truck should move to [-18, 13]
shortestDistanceToCust(-20, 15);
console.log(truckLocation);
// New customer position of [-16, 11], exactly 4 points of distance from truck, should not move
shortestDistanceToCust(-16, 11);
console.log(truckLocation);