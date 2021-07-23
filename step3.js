const addToZero = (arr) => {
    let values = []
    for(let i = 0; i < arr.length; i++){
        if(!(arr[i] in values)){
            for(let j = i+1; j < arr.length; j++){
                if(arr[i] + arr[j] === 0){
                    return true;
                }
            }
            values.push(arr[i])
        }
    }
    return false
}

console.log(addToZero([]))

console.log(addToZero([1]))

console.log(addToZero([1, 2, 3]))

console.time("addToZero");
console.log(addToZero([1, 2, 3, -2]))
console.timeEnd("addToZero");

//Guess Time: 4 ms O(n^2)
//Actual Time: .263 ms

console.log("")

const addToZero2 = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if((arr[i] * -1) in arr){
            return true;
        }
    }
    return false
}

console.log(addToZero2([]))

console.log(addToZero2([1]))

console.log(addToZero2([1, 2, 3]))

console.time("addToZero2");
console.log(addToZero2([1, 2, 3, -2]))
console.timeEnd("addToZero2");

//Guess Time: 1 ms o(n^2)
//Actual Time: .109 ms

console.log("")

const addToZero3 = (arr) => {
    let values = []
    for(let i = 0; i < arr.length; i++){
        if(!(arr[i] in values)){
            if((arr[i] * -1) in arr){
                return true;
            }
            values.push(arr[i])
        }
    }
    return false
}

console.log(addToZero3([]))

console.log(addToZero3([1]))

console.log(addToZero3([1, 2, 3]))

console.time("addToZero3");
console.log(addToZero3([1, 2, 3, -2]))
console.timeEnd("addToZero3");

//Guess Time: 3 ms O(n^2)
//Actual Time: .103 ms

console.log("")

const findLongestWord = (arr) => {
    longestWord = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longestWord){
            longestWord = arr[i].length
        }
    }
    return longestWord;
}

console.time("findLongestWord");
console.log(findLongestWord(["hi", "hello", "bye3", "goodbye"]))
console.timeEnd("findLongestWord");

//Guess Time: .05 ms O(n)
//Actual Time: .214 ms