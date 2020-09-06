function playerInit(){
    let name1 = prompt("Enter Player 1 Name:");
    document.getElementsByClassName("side")[0].getElementsByTagName("h3")[0].innerText=name1;
    let name2 = prompt("Enter Player 2 Name:");
    document.getElementsByClassName("side")[1].getElementsByTagName("h3")[0].innerText=name2;
}

function randomThrow(){
    let num1 = Math.random();
    num1 = Math.floor((num1 * 6) + 1);

    let num2 = Math.random();
    num2 = Math.floor( (num2 * 6) + 1);
    update_pics(num1,num2);
    if (num1 > num2){
        document.getElementById("change").innerHTML ="Player 1 Wins";
    }
    else if(num2 > num1){
        document.getElementById("change").innerHTML ="Player 2 Wins";
    }
    else{
        document.getElementById("change").innerHTML ="Its a Tie!!!!"; 
    }

}

function update_pics(num1,num2){
    document.getElementById("dice1").src = "img/dice-"+num1+".png";
    document.getElementById("dice2").src = "img/dice-"+num2+".png";
}