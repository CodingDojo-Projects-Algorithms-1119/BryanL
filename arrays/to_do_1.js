// pushFront
var toArr = [1,2,3,4]
function pushFront(arr,v){
    for (var i = arr.length - 1; i >= 0; i--){
        arr[i + 1] = arr[i];
    };
    arr[0] = v;
    return("New array is: " + arr);
};
console.log(pushFront(toArr, 55));

// popFront
function popFront(arr){
    var temp = arr[0]
    for (var i = 0; i < 0; i++){
        arr[i - 1] = arr[i];
        console.log("where is my output " + arr);
    }
}
console.log(popFront(toArr))


