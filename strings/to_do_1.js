var nonsense = " Pl ayTha tF u nkyM usi c "
function removeBlanks(string){
    string = string.split(" ").join("");
    return string;
}
console.log("White boy,", removeBlanks(nonsense) + "!")

var nonsense2 = "0s1a3y5w7h9a2t4?6!8?0"
function getDigits(string){
    for (var i = 0; i < string.length; i+=2){
        console.log(string.length)
        console.log(i)
        string = string.split(i).join("");
    }
    return string;
}
console.log("New Integer String", getDigits(nonsense2))