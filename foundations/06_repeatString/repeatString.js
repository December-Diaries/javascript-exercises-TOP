const repeatString = function(str1,num) {
    if (num<0){
        return "ERROR";
    }
    let str2="";
    for (let i=0;i<num;i++){
        str2+=str1;
    }
    return str2
};

// console.log(repeatString('hey',3));
// console.log(4);

// Do not edit below this line
module.exports = repeatString;
