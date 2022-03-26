function newDice(){
    let randomNumOne = Math.ceil(Math.random() * 6);
    let randomNumTwo = Math.cell(Math.random() * 6);

    if(randomNumOne ==1){
        document.getElementById("dice-1").src = "src/dice-1.png";
    }
    else if(randomNumOne ==2){
        document.getElementById("dice-1").src = "src/dice-2.png";
    }
    else if(randomNumOne ==3){
        document.getElementById("dice-1").src = "src/dice-3.png";
    }
    else if(randomNumOne ==4){
        document.getElementById("dice-1").src = "src/dice-4.png";
    }
    else if(randomNumOne ==5){
        document.getElementById("dice-1").src = "src/dice-5.png";
    }
    else if(randomNumOne ==6){
        document.getElementById("dice-1").src = "src/dice-6.png";
    }

    if(randomNumTwo ==1){
        document.getElementById("dice-2").src = "dice-1.png";
    }
    else if(randomNumTwo ==2){
        document.getElementById("dice-2").src = "dice-2.png";
    }
    else if(randomNumTwo ==3){
        document.getElementById("dice-2").src = "dice-3.png";
    }
    else if(randomNumTwo ==4){
        document.getElementById("dice-2").src = "dice-4.png";
    }
    else if(randomNumTwo ==5){
        document.getElementById("dice-2").src = "dice-5.png";
    }
    else if(randomNumTwo ==6){
        document.getElementById("dice-2").src = "dice-6.png";
    }
}