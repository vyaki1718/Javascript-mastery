// let obj = {
//     name: "peter"
// }

// let user = obj;  //object copy by reference
// user.name = "anil";

// console.log(obj);

//shallow copy 
//shallow copy does not work with nested object
// let obj = {
//     name: "peter"
// }

// // let user = Object.assign({}, obj);
// let user = { ...obj } // by destructuring
// user.name = "anil";

// console.log("object is : ", obj);
// console.log("user is : ", user);



//deep copy
// deep copy does not work if object have function
let obj = {
    name: "peter",
    address: {
        city: "pune",
        state: "MH"
    },
    getData: function ()
    {

    }

}

// let user = JSON.parse(JSON.stringify(obj));
// user.address.city = "amalner";

//to solve deep copy limitation we have to lodash library

let user = _.cloneDeep(obj);
user.address.city = "amalner";

console.log("object is : ", obj);
console.log("user is : ", user);