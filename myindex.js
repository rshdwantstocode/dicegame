
const dices = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png",
]

function random_number(){
   return Math.floor(Math.random()*6)+1;
}

function random_dice1(){
    number_of_dice = random_number();
    
    var dice_roll  = dices[number_of_dice-1];

    document.querySelectorAll("img")[0].setAttribute("src", dice_roll);
    return dice_roll;
}

function random_dice2(){
    number_of_dice = random_number();

    var dice_roll2 =  dices[number_of_dice-1];
    document.querySelectorAll("img")[1].setAttribute("src", dice_roll2);
   return dice_roll2;
}

function winner(){
    dice1 = random_dice1();
    dice2 = random_dice2();

    if (dice1 > dice2) {
         document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    } else if (dice2 > dice1) {
         document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    } else if(dice1 === dice2) {
         document.querySelector("h1").innerHTML = "Draw!!!!";
    }
}

winner();



