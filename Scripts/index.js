function diceGame(){
	var playerOne=Math.ceil(6*Math.random());
  var playerTwo=Math.ceil(6*Math.random());
  if (playerOne>playerTwo)
  {
    document.querySelector(".Title h1").innerHTML="Player One Wins!";
    document.querySelector("#playerOne").src="Images/dice"+playerOne+".png";
    document.querySelector("#playerTwo").src="Images/dice"+playerTwo+".png";
  }
  else if(playerOne<playerTwo)
  {
    document.querySelector(".Title h1").innerHTML="Player Two Wins!";
    document.querySelector("#playerOne").src="Images/dice"+playerOne+".png";
    document.querySelector("#playerTwo").src="Images/dice"+playerTwo+".png";
  }
  else if(playerOne==playerTwo)
  {
    document.querySelector(".Title h1").innerHTML="It's a Tie!";
    document.querySelector("#playerOne").src="Images/dice"+playerOne+".png";
    document.querySelector("#playerTwo").src="Images/dice"+playerTwo+".png";
  }
}
