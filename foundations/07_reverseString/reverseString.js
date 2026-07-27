const reverseString = function(str1) {
    let len =str1.length;
    // console.log(len);
    str2="";
    for(let i=len-1; i>=0;i--){
        str2+=str1[i];
    }
    return str2;
};

reverseString("abc");
// Do not edit below this line
module.exports = reverseString;
