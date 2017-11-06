var Target : Transform;
var Distance : float = 15;
var CameraY : float = 7;

function Update() {
	transform.position.z = Target.position.z - Distance;
	transform.position.x = Target.position.x + 17;
}

 function LateUpdate() {
 	GetComponent.<Camera>().main.transform.position.y = CameraY;
 } 
