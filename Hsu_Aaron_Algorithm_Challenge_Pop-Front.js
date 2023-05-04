// Create function to return value at the front of the array
function popFront(arr){
    var result = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (i === arr.length-1){
            arr.pop();
        } else {
            arr[i] = arr[i+1];
        }
    }
    return result;
}

// Test function
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(popFront(plants))
console.log(plants)