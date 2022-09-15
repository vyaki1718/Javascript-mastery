// let obj = {
//     name: "peter"
// }

// let user = obj;  //object copy by reference
// user.name = "anil";

// console.log(obj);


let obj = {
    name: "peter"
}

// let user = Object.assign({}, obj);
let user = { ...obj } // by destructuring
user.name = "anil";

console.log("object is : ", obj);
console.log("user is : ", user);