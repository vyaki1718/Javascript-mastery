
//declare class

class BankAccount
{
    name = "vivek patil";
    #pin = "12345";  // #pin  declaring private property
    getData()
    {
        return this.name;
    }
    #getifsc()         //#getPin(){}  declare private method
    {
        return "0008877";
    }
    getDetails()
    {
        return {
            pin: this.#pin,
            name: this.name,
            ifsc: this.#getifsc()
        }
    }
}

function getDetails()
{
    const details = new BankAccount();
    console.log(details.getDetails())
}
