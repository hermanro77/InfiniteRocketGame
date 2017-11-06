import System.IO;

var FileName = "highscore.data";
var ScoreLoad : String;
var HighScoreDisplay : GameObject;
var line : String;

static var CompareScore : int;

function Start(){
	var sr : StreamReader = new StreamReader(FileName);
	line = sr.ReadLine();

	while (line != null){
		ScoreLoad = line;
		line = sr.ReadLine();
	}

	sr.Close();
	HighScoreDisplay.GetComponent.<Text>().text = "High Score: " + ScoreLoad;
	CompareScore = int.Parse(ScoreLoad);

}
	 	  
