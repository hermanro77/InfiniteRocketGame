import System.IO;

var FileName = "highscore.data";
var ScoreAmount : int;

var HighScore : int;

function Start(){
	HighScore = ScoreLoad.CompareScore;
	ScoreAmount = ScoringSystem.TheScore;

	if (ScoreAmount > HighScore){
		var ourFile = File.CreateText(FileName);
		ourFile.WriteLine("" + ScoreAmount);
		ourFile.Close();
	}
}
