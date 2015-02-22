// get info from form elements
var user = form.elements["user"];
var kill = form.elements["kill"];
var kill_key = form.elements["passkey"];
// initialize database var
var db = new Firebase("https://assassins.firebaseio.com/users/");

//Check if kill key is correct 
db_kill = db.child(kill);
try {
	db_kill.on("value", function(snapshot){
		if (snapshot.val().passkey != kill_key) throw "invalid kill_key"
	});
} catch(error) {
	alert("Error: " + error);
}


//Increment user's score 
db_user = db.child(user);
db_handle = db_user.on("value", function(snapshot){
	var is_target=false;
	var user_score = snapshot.val().score+1; //get score from firebase and increment it
	db.off("value",db_handle); //turn off listening event
	db.update({
		"score": user_score //update score
	});
//Check if kill is on user's target list
	try{
		for (var key in snapshot.val().targets){
			if (snapshot.val().targets[key] == kill){
				is_target=true;
				break;		
			}
		}		
		if (is_target == false) throw (kill+" is not a valid target!");
	} catch(error){
		alert("Error: " + error);
	}
});
/*
//get stats
db_stats = db.parent().child("stats");
db_stats.on("value", function(snapshot){
	var num_players = snapshot.val().num_players;
	
	//assign new target		
	i=num_players/2; //not random, fix.	
	db_handle = db.forEach(function(childSnapshot){
		var name = childSnapshot.key();	
		i--;	
	
		if (i<0) {
			db.off("value",db_handle); //turn off listening event
			db.child("targets").update({
				"t1": user_score // reassign target
			});
			return;
		}	
	});

});
*/
/* Randomly assign a new target JUST JOKING LOL!  
	var i=0;
	db_handle = db.on("value", function(snapshot){
alert("yes");
	for (var user in snapshot.val().users){	
		crosshairs[i]=snapshot.val().users.crosshairs; 	
alert("yesyes");
console.log(crosshairs[i]);
	}
	});
*/

/*

 if passkey of kill is incorrect, error
 if kill is in user target list
 randomized_newtarget
 increment user score
 else error
*/

