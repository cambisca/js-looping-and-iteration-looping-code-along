// Code your solutions in this file
let nameArray = ["Ada", "Brendan", "Ali"]

function writeCards(array, eventName){
    for (let counter = 0; counter < nameArray.length; counter++){
        console.log(`Thank you, ${nameArray[counter]}, for the wonderful ${eventName} gift!`)
    };
}


function countDown(number){
   while (number >= 0) {
       console.log(number)
       number --
   }
}