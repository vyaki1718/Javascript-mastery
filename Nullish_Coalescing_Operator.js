// two check  undefined or null value Nullish coalescing operator is used

let user = {
    student: {
        name: "",
        age: 0
    }
}

console.log(user.student.name ?? "unknown")
console.log(user.student.age ?? 21)


//not check - bool, empty string , number 
// undefined and Null