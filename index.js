var name = "victor";

function first()
{
    var a = "Hi";
    second();
    console.log(`${a}${name}`);
}

function second()
{
    var b = "Hey";
    third();
    console.log(`${b}${name}`);
}

function third()
{
    var c = "Hello";
    console.log(`${c}${name}`)
}

first();