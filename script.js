/**
 * Created by Seth on 2/21/2015.
 */


var database = {
        var userProfiles: [undefined];

//jquery goes here

        randomTarget: function(){
                return userProfiles[Math.random()];
        }

}

var userProfile = {
        name: undefined,
        passkey: undefined,
        score: 0;
        targets: [undefined];

        userProfile: function(name, passkey){
                this.name = //
                this.passkey = passkey;

                for ( i = 0; i<3; i++) {
                        this.targets = database.randomTarget();
                }
        }
        updateName: function(s){
                this.name= s;
        }
        updatePass: function(s){
                this.passkey = s;
        }

        assasinate: function(d){
                score++; //increment killer's score
                this.targets[d].takeHit(); //decrement killee's score
                this.targets[d] = database.randomTarget(); //generate a new target
        }
        takehit: function(){
            if(this.score > 0) {
                score--; //decrement score if hit
            }
        }
        getTargets: function(){
                var db = db.child("users/user1/name").on("value", 
			function(snapshot){
				console.log(snapshot.val());
		});
                db.child("")
                return targets;
        }
}

