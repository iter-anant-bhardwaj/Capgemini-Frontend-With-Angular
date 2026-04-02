function isValidEmail(email){
    if(email.includes("@") && (email.endsWith(".com")) || (email.endsWith(".in"))){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidEmail("abc@gmail.com"));
console.log(isValidEmail("abc@yahoo.com"));
console.log(isValidEmail("abc@icloud.com"));
console.log(isValidEmail("abc@mail"));
console.log(isValidEmail("abc.com")); 