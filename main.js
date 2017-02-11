	// function when push the button 
	function height(height,space){
		var height = document.getElementById("height").value;
 		var character = document.getElementById("character").value;
 		var tree="";
 		var space = " " ;

 	for ( var i = 0 ; i< height; i++ ){  
 			
 		// add space 
 		for ( var k = 0 ; k <( height - i + 1); k++){
 		tree += (space );
 		}

 		// loop to add character
 		for (var j = 0 ; j < ((2 * i) + 1) ; j++){
 		tree +=  (character );
 			}
 			//adding new line
 			tree +=	'\n'
	 	
	 	}
	 		console.log(tree);
	 	}
	 
//event for clicking the button

document.getElementById("build").addEventListener("click", height);




