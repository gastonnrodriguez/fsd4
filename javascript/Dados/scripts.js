let chips = 0;
let betting_amount = document.getElementById("chips").value;
let balance = document.getElementById("balance").value;

let buyChips = (betting_amount) => {
  chips += betting_amount;
  console.log(chips);
  return chips;
};

let play = (num, bet) => {
    
    let winner = generateRandom();  
  if (parseInt(num) === winner) {
    //balance += bet * 2;
    alert('GANADOR Nro:'+winner);
  } else {
    //balance -= bet;
    alert('PERDEDOR Nro:'+winner);
  }
  return balance;
};

function generateRandom() {
    var num = Math.floor((Math.random() * 6 ) + 1);
    return (num === 0) ? generateRandom(1, 6) : num;
}