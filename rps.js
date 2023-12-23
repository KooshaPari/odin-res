function playRound (playerSel, computerSel){
    playerSel = playerSel.toLowerCase();
    if(playerSel == computerSel){
        return "tie";
    }
    else if(playerSel == "rock"){
        if(computerSel == "paper"){
            return "lose";
        }
        else{
            return "win";
        }
    }
    else if (playerSel == "paper"){
        if(computerSel == "scissors"){
            return "lose";
        }
        else{
            return "win";
        }
    }
    else if(playerSel == "scissors"){
        if(computerSel == "rock"){
            return "lose";
        }
        else{
            return "win";
        }
    }
    else{
        return "invalid";
    }
}
function comPlay(){
    options = ["rock", "paper", "scissors"];
    let sel = Math.floor(Math.random() * 3);
    return options[sel];
}
function game(){
    let pScore=0;
    let cScore=0;
    while(pScore < 5 || cScore < 5) {
        let pSel = prompt("Rock, Paper, or Scissors?");
        let cSel = comPlay();
        let result = playRound(pSel, cSel);
        if(result == "win"){
            pScore++;
        }
        else if(result == "lose"){
            cScore++;
        }
        console.log("Player: " + pSel + " Computer: " + cSel + " Result: " + result);
    }
}