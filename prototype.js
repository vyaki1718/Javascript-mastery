//assign prototype to all project

//property prototype
Object.prototype.myAppData = "This is proto for object";

//function prototye
Object.prototype.myData = function ()
{
    return " function prototype";
}

String.prototype.otherData = "this is prop for string";
String.prototype.customeLenth = function ()
{
    return this.length + 2;
}
var a = 2;

let users = {
    getFullName: function ()
    {
        return this.name + " " + this.lastName;
    },
    getAge: function ()
    {
        let age = new Date().getFullYear() - this.birth;
        return age;
    }
}

let student = {
    name: "Vivek ",
    lastName: "Patil",
    birth: 1998,
    // getAge: users.getAge
}

let techer = {
    name: "Anil",
    lastNem: "Patil",
    birth: 1992,
    // getAge: users.getAge
}

student.__proto__ = users;
techer.__proto__ = users;

console.log(student.getAge())
console.log(techer.getAge())
