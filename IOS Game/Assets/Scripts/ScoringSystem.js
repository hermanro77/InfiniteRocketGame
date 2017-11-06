import UnityEngine.UI;

static var TheScore : int;
var ScoreDisplay : GameObject;

function Start(){
	TheScore = 0;
	InvokeRepeating("AddScore", 0.5, 0.2);
}

function AddScore () {
	TheScore += 5;
	ScoreDisplay.GetComponent.<Text>().text = "Score: " + TheScore;
}
