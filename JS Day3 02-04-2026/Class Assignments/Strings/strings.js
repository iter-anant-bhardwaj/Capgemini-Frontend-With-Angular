// 1. Creating Strings
let str1 = "Hello";            
let str2 = 'World';            
let str3 = `JavaScript`;       

console.log(str1, str2, str3);

// 2. Concatenation
let greeting = str1 + " " + str2;
console.log(greeting); 

// 3. Template Literals
let name = "Anant";
let msg = `Welcome ${name} to ${str3}`;
console.log(msg); 

// 4. Length
console.log(str3.length); // 10

// 5. Case Conversion
console.log(str3.toUpperCase()); 
console.log(str3.toLowerCase()); 

// 6. Accessing Characters
console.log(str3[0]);       
console.log(str3.charAt(0));

// 7. Finding Substrings
console.log(str3.indexOf("Script"));  
console.log(str3.includes("Java"));   
console.log(str3.startsWith("Java")); 
console.log(str3.endsWith("Script")); 

// 8. Extracting Substrings
console.log(str3.slice(4,10));      
console.log(str3.slice(-6));        
console.log(str3.substring(4,10));  
console.log(str3.substring(10,4));  

// 9. Replacing Strings
let newStr = str3.replace("Java", "Type");
console.log(newStr); 

// 10. Splitting Strings
let words = "I love JavaScript".split(" ");
console.log(words); 

// 11. Trimming Strings
let spaceStr = "   Hello   ";
console.log(spaceStr.trim()); 

// 12. Repeating Strings
console.log("Hi! ".repeat(3)); 

// 13. Immutability
let strTest = "Hello";
strTest[0] = "Y";   
console.log(strTest);

// 14. Converting other types to string
let num = 123;
let bool = true;
console.log(String(num));  
console.log(String(bool)); 