// Debug the following code that removes negative values from an array

function removeNegatives(arr) {
    var array = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] >= 0) {
            array.push(arr[i]);
        }
    }
    return array;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);