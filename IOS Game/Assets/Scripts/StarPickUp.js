var StarScore : int = 500;
var StarSound : AudioSource;

function OnTriggerEnter(col : Collider){
	StarSound.Play();
	ScoringSystem.TheScore += 500;
	this.transform.position = Vector3(0, 1000, 0);
}
