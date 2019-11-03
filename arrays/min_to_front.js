function minFront(arr){
    var temp = arr[0];
    var remIdx = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < temp){
            temp = arr[i];
            remIdx = remIdx + 1
        }
    } 
    for (var idx = remIdx; idx < arr.length; idx++){
        arr[idx] = arr[idx + 1];
    }
    for (var ix = arr.length - 1; ix >= 0; ix--){
        arr[ix + 1] = arr[ix];
    }
    arr[0] = temp;
    return(arr);
}
console.log(minFront([4,2,1,6,12]));

