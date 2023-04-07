//Callbacks functions as an argument //
const number =[ 11, 22, 33];
const square = number(y => y * 33);

// lexical scoping using this value  to get a limit of flour//
function Cakes(){
    this.flour = 3;
setInterval(() => {
    this.flour++;
    console.log(this.flour);
}, 15);
}
