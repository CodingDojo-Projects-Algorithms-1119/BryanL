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

// //Insert At
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
console.log("This is what remains", removeAt(uhray, 2)); 

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
console.log("Pairs swapped", swapPairs([true,"Brendan",42]));

// //Remove Duplicates
var webDevs = ["Amy","Amy","Bob","Bob","Chris","Colleen","Colleen"]
function removeDuplicates(arr){
    for(var i = 1; i < arr.length; i++){
        if(arr[i] == arr[i - 1]){
            removeAt(arr, i)
        }
    }
    return(arr)
}
console.log("Removed Duplicates", removeDuplicates(webDevs));

//Had a very hard time on this assigment.  Took me over 4 hours so I did not refactor the code.  If time, come back and practice refactoring.  
//Also come back to Remove Duplicates.  For some reason i couldn't figure out how to replicate the removeAt function by nesting a second for loop. Only way I could make it work was referencing the function itself. 

//To Do 2
//Tried to do this assignment without using the functions I had used earlier.  I know refactoring code is good practice, but I felt I needed more time building out algorithms.  
//Ultimately trying to figure out how to rewrite the functions specific to the problem was adding a ton of time so I bailed on the idea.  

var arr = [1,2,3,4,5]

// Reverse
function reverse(arr){
    var temp = 0;
    for (var i = 0; i < arr.length / 2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}
console.log(reverse(arr));

//Rotate
function rotateArr(arr, shiftBy){
    var count = 0
    while( count < shiftBy){
        var rotated_idx = 0
        for (var i = arr.length - 1; i >= 0; i--){
            rotated_idx = arr[arr.length-1]
            arr[i + 1] = arr[i];
        }
        arr[0] = rotated_idx
        arr.pop()
        count += 1
    }
    return arr
}
console.log(rotateArr(arr,4));
// Just tried to make this work.  Took a long time without even doing the extras. 

function filterRange(arr, min, max){
    for(var i = 0; i < arr.length; i++){
        if(min >= arr[i] || max <= arr[i]){
            removeAt(arr,i)
            i--
        }
    }
    return arr;
}
console.log("New array between given values:",filterRange(arr,2,5)) 

// Concat
var concatenated_array = []
function pushToNew(arr){
    for(var i =0; i<arr.length; i++){
        concatenated_array.push(arr[i])
    }
    return arr;
}0.
function arrConcat(arr1, arr2){
    pushToNew(arr1);
    pushToNew(arr2);    
    return concatenated_array;
}
console.log(arrConcat(arr, uhray))

//I don't have enough time for the skyline one.  It would take me hours.  
//Come back to it when School is over and you start reviewing algorithms for interviews. 

