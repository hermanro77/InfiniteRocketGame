var speed : float = 8.0;
var jumpSpeed : float = 5.0;
var gravity : float = 50.0;
var moveDirection : Vector3 = Vector3.zero;

function Update(){
	var controller : CharacterController = GetComponent.<CharacterController>();
		if (controller.isGrounded){
			moveDirection = Vector3(0, 0, Input.GetAxis("Horizontal")+3);
			moveDirection = transform.TransformDirection(moveDirection);
			moveDirection *= speed;

			if (Input.GetButton("Jump")){
				moveDirection.y += jumpSpeed;
			}
		}
		else{
			if (Input.GetButton("Jump")){
				moveDirection.y += jumpSpeed;
			}
		}

		moveDirection.y -= gravity * Time.deltaTime;

		controller.Move(moveDirection * Time.deltaTime);
	}

