function OnGUI(){
	if (GUI.Button(Rect(Screen.width/2 - 180, Screen.height - 100, 150, 50), "Fly Again")){
		Application.LoadLevel(2);
	}

	if (GUI.Button(Rect(Screen.width/2 + 35, Screen.height - 100, 150, 50), "Main Menu")){
		Application.LoadLevel(0);
	}
}
