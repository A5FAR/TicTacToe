
var turn = false;
var lastID = null;
var visit = []; 
var x = 0;
var block = [];
var winner = null;
var p1_w = 0;
var p1_l = 0;
var p2_w = 0;
var p2_l = 0;

function play(event , id) {


	if(!event.target.innerText && !winner){
		event.target.innerText = turn? "O": "X";
		turn = !turn;
		lastID = event.target.innerText;
		visit[x] = document.getElementById(id.toString());
		x++;
	}

	if(x >= 5){
		for (var i = 0; i < 9; i++) {
				block[i] = document.getElementById(i).innerText;
			}

			if ((block[0]==block[1] && block[1]==block[2] && block[0]!="") || (block[3]==block[4] && block[4]==block[5] && block[3]!="") || (block[6]==block[7] && block[7]==block[8] && block[6]!="") || (block[0]==block[3] && block[3]==block[6] && block[0]!="") || (block[1]==block[4] && block[4]==block[7] && block[1]!="") || (block[2]==block[5] && block[5]==block[8] && block[2]!="") || (block[0]==block[4] && block[4]==block[8] && block[0]!="") || (block[2]==block[4] && block[4]==block[6] && block[2]!="")) {
				winner = lastID;
			}	
	}

	if(winner == "X"){
		document.getElementById("status").innerText="Player 1 Wins";
		p1_w++;
		p2_l++;
		document.getElementById("wCount1").innerText=p1_w;
		document.getElementById("lCount1").innerText=p2_l;
	}
	else if (winner == "O"){
		console.log("winner:" + " " + winner);
		document.getElementById("status").innerText="Player 2 Wins";
		p1_l++;
		p2_w++;
		document.getElementById("wCount2").innerText=p2_w;
		document.getElementById("lCount2").innerText=p1_l;
	}
}

function reset(event){
	turn = false;
	lastID = null;
	x = 0;
	winner = null;
	document.getElementById("status").innerText="New Game";
	for (var i = 0; i < 9; i++) {
		document.getElementById(i).innerText = "";
		visit[i] = "";
		block[i] = "";
	}
	console.log(lastID + " " + winner);
	
}