 

 // ...................................................................

// this alert i used for to welcome the users

             alert("You Are Looking My Portfolio Thanks");

 // ...................................................................


// this below code is used for to get user name and display on the screen

         

             function TakeName(){

             var inputFromuser=prompt("Tell Me Your First Name Please...........");
	 
			 if(inputFromuser==null){
				document.getElementById("showUserInput").innerText="Welcome My Friend" 
				document.getElementById("showUserInput").style.color="red"
			 }
			 else{
				document.getElementById("showUserInput").innerText="Welcome "+inputFromuser  
				document.getElementById("showUserInput").style.color="red"
			 }
            
                               }

             setTimeout("TakeName()",2000);

 // ...................................................................








 