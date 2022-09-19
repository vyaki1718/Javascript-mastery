// javascript map

let obj = {
    name: "anil",
    true: "this is boolean value" // true as string
}

let data = new Map([
    ['name', "peter"],
    [10, "this is number"],
    [true, "this is boolean value"]])
obj.city = "noida";
data.set('city', 'noida')
console.log(obj);
console.log(data.get('city'))

console.log(data.keys())

console.log(data)
console.log(data.values())
data.delete(true)
console.log(data.size)

console.log(data.has('city'))

// data.forEach((v, k) =>
// {
//     console.log(k, v)
// })

for ([k, v] of data)
{
    console.log(k, v)
}

