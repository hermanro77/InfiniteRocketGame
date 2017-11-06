var DeathBlack : GameObject;
var DeathText : GameObject;
var TheRocket : GameObject;
var Crash : AudioSource;
var MainAudio : GameObject;

var HighScore : GameObject;

function OnTriggerEnter(col : Collider){
	NextAxis.TheXAxis = 133.7;
	HighScore.SetActive(true);
	DeathBlack.SetActive(true);
	DeathText.SetActive(true);
	TheRocket.SetActive(false);
	Crash.Play();
	MainAudio.SetActive(false);
}
