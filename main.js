// 	// function when push the button 
// 	function height(height,space){
// 		var height = document.getElementById("height").value;
//  		var character = document.getElementById("character").value;
//  		var tree="";
//  		var space = " " ;

//  	for ( var i = 0 ; i< height; i++ ){  
 			
//  		// add space 
//  		for ( var k = 0 ; k <( height - i + 1); k++){
//  		tree += (space );
//  		}

//  		// loop to add character
//  		for (var j = 0 ; j < ((2 * i) + 1) ; j++){
//  		tree +=  (character );
//  			}
//  			//adding new line
//  			tree +=	'\n'
	 	
// 	 	}
// 	 		console.log(tree);
// 	 	}
	 
// //event for clicking the button

// document.getElementById("build").addEventListener("click", height);






// function when push the  grow button  
	function height(){
		var height = document.getElementById("height").value;
 		var character = document.getElementById("character").value;
 		var tree="";
 		var space = " " ;

	 	for ( var i = 0 ; i< height; i++ ){  
	 			
	 		//loop add space 
		 		for ( var k = 0 ; k <( height - i + 1); k++){
		 		tree += (space );
		 			// tree.push('space');
		 		}

	 		// loop to add character
		 		for (var j = 0 ; j < ((2 * i) + 1) ; j++){
		 		tree +=  (character );
		 			// tree.push('character');
		 			}
	 			//adding new line
	 			tree +=	'\n'
		 	
		 }
		 		console.log(tree);
	};


//event for clicking the  enter button in kb 
	//for the id character

	document.getElementById("character").addEventListener("keypress",
		function(event){
			if (event.keyCode === 13){
				height()}
			});
													
		//for the id height
	document.getElementById("height").addEventListener("keypress",
		function(event){
			if (event.keyCode === 13){
				height()}
			});
	 
//event for clicking the  grow button

document.getElementById("build").addEventListener("click", height);



