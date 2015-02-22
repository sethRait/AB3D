var db  =  Firebase("https://assassinate.firebaseio.com/");

function login(name, pass) {
    "use strict";
    console.log(name);
    console.log(pass);
    var success = 1;
    db  = new Firebase("https://assassinate.firebaseio.com/");
    var user = db.child("users/"+name).on("value", function(snapshot){
        if (snapshot.val() != pass){
            success = 0;
        }
    });

    console.log(success);
    alert(success);
    return success;
}

function generateGame(){
    db  = new Firebase("https://assassinate.firebaseio.com/users/");
    generateTarget("David");
    generateTarget("Katherine");
    generateTarget("Seth");
    generateTarget("Janac");
}



function getName(name){
    return name;
}

function getTarget(number){
    db  = new Firebase("https://assassinate.firebaseio.com/");
    var user = db.child("users/"+name+"/"+"T"+number).on("value", function(snapshot){
        return snapshot.val();
    })
}

function assassinate(killer, killee){
    ref  = new Firebase("https://assassinate.firebaseio.com/users/"+name);
    var usersRef = ref.set(
        {
            score: 1
        });
}
function generateTarget(name){
    ref  = new Firebase("https://assassinate.firebaseio.com/users/"+name);
    var usersRef = ref.set(
        {
            t1: "Seth",
            t2: "Katherine",
            t3: "David",
            t4: "Janac"
        }
    );
}
/**
 function returnTargets(name, loggedin) {
  db  = new Firebase("https://assassinate.firebaseio.com/");
  var user = db.child("users/"+name).on("value", function(snapshot){
    if (loggedin == 0){
      alert("Wrong Password.");
    }else{
      for (var key in snapshot.val().targets){
        var val = snapshot.val().targets[key];
        console.log(val);
      }
    }
  });
}
 */
function newuser(name, pass) {
    ref  = new Firebase("https://assassinate.firebaseio.com/users/"+name);
    var usersRef = ref.set(
        {
            name: name,
            password: pass,
            score: 0,
            t1: name,
            t2: name,
            t3: name,
            t4: name
        }
    );
}