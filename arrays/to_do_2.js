var arr = [1,2,3,4,5]

//Reverse
// function reverse(arr){
//     var temp = 0;
//     for (var i = 0; i < arr.length / 2; i++){
//         temp = arr[i];
//         arr[i] = arr[arr.length - i - 1];
//         arr[arr.length - i - 1] = temp;
//     }
//     return arr;
// }
// console.log(reverse(arr));

//Rotate
function rotateArr(arr, shiftBy){
    for (var i = 0; i < shiftBy; i++){
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[arr.length - 1] = temp
        console.log(arr)
    }
    return(arr)
}
console.log(rotateArr(arr,2));
