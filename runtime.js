const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


/*

doublerInsert(tinyArray) = 56.7 us
doublerAppend(tinyArray) = 139.7 us

doublerInsert(smallArray) = 75.2 us
doublerAppend(smallArray) = 171 us

doublerInsert(mediumArray) = 376.3 us
doublerAppend(mediumArray) = 240 us

doublerInsert(largeArray) = 22.06 ms
doublerAppend(largeArray) = 1.02 ms

doublerInsert(extraLargeArray) = 2.01 s
doublerAppend(extraLargeArray) = 6.04 ms

With a lower number of iteration insert works faster then append though it is imperceptible.  However around 1000 iteration they are about even though the time has definately 
increased but still not percepible.  After that though insert speeds ahead of append at around 100000 it passes a second while append is still at just over milliseconds. based on this
less then 100 iteration it may be better to use insert though as a general rule using append would be wise due to the fact that both will apear the same to the user at those amounts.

The reason insert is slower is because when it inserts a value into an array it replaces the first value then taking that value and replacing the second value and repeats till it reaches
the last value.
*/