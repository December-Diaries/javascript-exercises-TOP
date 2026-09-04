const palindromes = function (text) {
    let newtxt="";
    for(const i of text.toLowerCase()){
        // console.log(i);
        
        if (/^[a-z0-9]$/.test(i)){ 
            newtxt+=i;
        }
        
    }
    return (newtxt === newtxt.split("").reverse().join(""));
    
};


// console.log(palindromes('carrac'));
// Do not edit below this line
module.exports = palindromes;
