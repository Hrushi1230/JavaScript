let variable = "Hello";
console.log("variable is: ", variable);

//its value cant be changed
const constantVariable = 234567;
console.log("constant variable is: ", constantVariable);
//constantVariable = 123456; // This will throw an error if uncommented

var cartQuantity = 0;
console.log("cart quantity : ", cartQuantity);
// cartQuantity = 10; // This will work, as var allows reassignment
cartQuantity += 2;
console.log("cart quantity after addition : ", cartQuantity);