// Push Front
var uhray = [1,2,3,4]
function pushFront(arr,v){
    for (var i = arr.length - 1; i >= 0; i--){
        arr[i + 1] = arr[i];
    }
    arr[0] = v;
    return("New array is: " + arr);
}
console.log(pushFront(uhray, 55));

// Pop Front
function popFront(arr){
    var firstIdx = arr[0];
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return("First index value is: " + firstIdx + " This value was also removed from the array.");
};
console.log(popFront(uhray));

//Insert At
function insertAt(arr,idx,v){
    for (var i = arr.length - 1; i >= idx; i--){
        arr[i + 1] = arr[i];
    }
    arr[idx] = v;
    return("New Value added in array: " + arr);
}
console.log(insertAt(uhray, 2, 66));

//Remove At
function removeAt(arr,idx){
    var removedIdx = arr[idx];
    for (var i = idx; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return("Removed this value from array: " + removedIdx);
}
console.log(removeAt(uhray, 2));

//Swap Pairs
function swapPairs(arr){
    if (arr.length % 2 != 0){
        var newLength = arr.length - 1
    }
    else{
        var newLength = arr.length
    }
    for(var i = 0; i < newLength; i += 2){
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}
console.log(swapPairs(uhray));
console.log(swapPairs([true,"Brendan",42]));

//Remove Duplicates
var webDevs = ["Amy","Amy","Bob","Bob","Chris","Colleen","Colleen"]
function removeDuplicates(arr){
    for(var i = 1; i < arr.length; i++){
        if(arr[i] == arr[i - 1]){
            removeAt(arr, i)
        }
    }
    return(arr)
}
console.log(removeDuplicates(webDevs));

//Had a very hard time on this assigment.  Took me over 4 hours so I did not refactor the code.  If time, come back and practice refactoring.  
//Also come back to Remove Duplicates.  For some reason i couldn't figure out how to replicate the removeAt function by nesting a second for loop. Only way I could make it work was referencing the function itself. 