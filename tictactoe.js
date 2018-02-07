
var turn = false;
var lastID = null;
function play(event) {


	if(!event.target.innerText){
		event.target.innerText = turn?"O": "X";
		turn = !turn;
		lastID = id;
	}

	
}