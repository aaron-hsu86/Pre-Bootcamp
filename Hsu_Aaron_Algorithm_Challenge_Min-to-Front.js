// Function to move min value to front
function minToFront(arr){
    // Declare variables
    var min = arr[0], result = [], minIndex = 0;
    // Go through Array and determin the min value and its index
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
            minIndex = i;
        }
    }
    // If min value was not already in the first position
    if (minIndex != 0){
        // Push min value to first position of result array
        result.push(min);
        // Iterate through array again
        for (var i = 0; i < arr.length; i++){
            // Push value to result if not index of min value
            if (i != minIndex){
                result.push(arr[i]);
            }
        }
        return result;
    }
    // If min value was already in first position, return array
    return arr;
}

var test1 = [4,2,1,3,5];
var test2 = [5, 93, 22, 4];

console.log(minToFront(test1))
console.log(minToFront(test2))