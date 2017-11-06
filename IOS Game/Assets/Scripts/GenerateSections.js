var Sections : GameObject[];

var NextXAxis : float = NextAxis.TheXAxis;
var GenSec : int;
var NewSec : GameObject;
var NextPos : Vector3 = Vector3(NextAxis.TheXAxis, 10, 8.360531);

function OnTriggerEnter(col : Collider){
	NextPos = Vector3(NextAxis.TheXAxis, 10, 8.360531);
	GenSec = Random.Range(0, Sections.length);	
	NextXAxis = NextAxis.TheXAxis;
	NewSec = Sections[GenSec];

	Instantiate(NewSec, NextPos, Quaternion.identity);
	NextAxis.TheXAxis += 500;
}