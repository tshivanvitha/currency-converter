// Try edit message
function Currency(){
		y = document.getElementById("converter").value;
		return y;
	}
 
function Calculate(){
	y = Currency();
 
	x = document.getElementById("value1").value;
 
	if(x == ""){
		document.getElementById("value2").value = "";
	}else{
		switch(y){
			case "Dollar":
				document.getElementById("value2").value = x * 75;
			break;
      case "usd":
				document.getElementById("value2").value = x * 76.57;
			break;
      case "Pound":
				document.getElementById("value2").value = x * 95.63;
			break;
 
			case "Euro":
				document.getElementById("value2").value = x * 83.30;
			break;
		}
	}
}