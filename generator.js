//generator function 
//A function which can pause or resume is called generator function
// * add to function keyword or function name
// we can called generator function directly 
// for invoking fuction we have to create instance of function 

// function* generatorFun()
// {
//     console.log("Function called");
//     let x = "first called"
//     yield x;
//     let y = () => { return 30 };
//     yield y();
//     yield 40;
// }

// let sG = generatorFun();
// console.log(sG.next().value); //only getting value
// console.log(sG.next());
// console.log(sG.next());
// console.log(sG.next());

function* generatorFun()
{
    console.log(" function called")
    let i = 100;
    while (true)
    {
        i++;
        yield i;
    }
}
// generatorFun().next();
let sG = generatorFun();

function getId()
{
    // console.log(sG.next())
    document.getElementById("did").innerText = sG.next().value;
}

var b = 20;