function countSpaces(str){
    let count = 0;
    for(let char of str){
        if(char === ' ') count++;
    }
    return count;
}

let s = "Hey all, have a good day!!";
console.log(countSpaces(s)); 