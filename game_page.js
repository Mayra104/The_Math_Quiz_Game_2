var player1_name=localStorage.getItem("player1name");
var player2_name=localStorage.getItem("player2name");
var player1_score=0;
var player2_score=0;

document.getElementById("player1_name_input").innerHTML=player1_name+":";
document.getElementById("player2_name_input").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question-Turn- "+player1_name;
document.getElementById("player_answer").innerHTML="Answer-Turn- "+player2_name;

