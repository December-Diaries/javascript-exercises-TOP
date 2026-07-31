const removeFromArray = function(arr,...nums) {
    // console.log(num)
    return arr
        .filter((num)=> {
            return !nums.includes(num);
        });
    
};

// removeFromArray(4,3,6);
console.log(removeFromArray([1,2,5,96,6],96,2,7));
// Do not edit below this line
module.exports = removeFromArray;
