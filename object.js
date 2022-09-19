// an object is a collection of related data and/or functionality
//Object store the data in form of key and value pair
//In same object we can store different type of value

//create object

// 1 by object literal

let key = "address";
let phone = 113123123;
let email = "vivekpatil@gmail.com"
let obj = {
    id: 10,
    name: "vijay",
    isActive: true,
    getData: function ()
    {
        return this.city
        // we can return the value of later defined property 
    },
    inner: {
        name: "inner obj"
    },
    ['pin code']: 12345,//define the property with spaces
    [key]: "Pune, Maharashtra, India",// for taking key as variable
    phone,
    email // short hand property
}

//delet property or method
delete obj.isActive;

//acces inner object
// console.log(obj.inner.name)


obj.city = "new york"
// check object has property or not
// console.log('city' in obj)

//loop over an object 
// by in loop

for (item in obj)
{
    console.log(obj[item])
}
console.log(obj)
//2 By creating instance of object 

let objInst = new Object();
objInst.id = 101;
objInst.name = "aniket";

console.log(objInst)

//3 By using an object constructor

function objConst(id, name, age)
{
    this.id = id,
        this.name = name,
        this.age = age
}

objc = new objConst(103, "yash", 22);
console.log(objc);


//sum of object values

let emp = {
    peter: 100,
    bruce: 200,
    tonny: 300
}

let salary = 0;
for (item in emp)
{
    salary += emp[item];
}
console.log(salary)

// loop in object
for(item in obj){
    console.log(obj.item)
}
//
