<<<<<<< HEAD

 var db  =  Firebase("https://assassinate.firebaseio.com/");

function login(name, pass) {

  var success = undefined;

  db  = new Firebase("https://assassinate.firebaseio.com/");
  var user = db.child("users/"+name+"/password").on("value", function(snapshot){
  	if (snapshot.val() == null) {
    	alert("User does not exist.");
    	success = 0;
    } else if (snapshot.val() == pass){
    	success = 1;
    } else {
    	alert("Wrong password.");
    	success = 0;
    }
    });

  console.log(success);
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
            score: 1,
          });
}
 function generateTarget(name){
    ref  = new Firebase("https://assassinate.firebaseio.com/users/"+name);
    var usersRef = ref.set( 
            {
=======
var db  =  Firebase("https://assassinate.firebaseio.com/");

function login(name, pass) {

    var success = undefined;
    var notused = 0;

    db  = new Firebase("https://assassinate.firebaseio.com/");
    var user = db.child("users/"+name.value).on("value", function(snapshot){
        if (snapshot.val()==null){
            alert("Username or password doesn't exists");
        }
        else if (snapshot.val().passkey != pass.value){
            alert("WRONG PASSWORD!!!!!!!!!!....or username");
        }else{
            window.location = "UserInfo.html";
        }
    });

    console.log(success);
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
            score: 1,
        });
}
function generateTarget(name){
    ref  = new Firebase("https://assassinate.firebaseio.com/users/"+name);
    var usersRef = ref.set(
        {
>>>>>>> 74e1c149730861e9f822d129a7614f98bf2445b0
            t1: "Seth",
            t2: "Katherine",
            t3: "David",
            t4: "Janac"
<<<<<<< HEAD
            }
          );
        }
/**
function returnTargets(name, loggedin) {
=======
        }
    );
}
/**
 function returnTargets(name, loggedin) {
>>>>>>> 74e1c149730861e9f822d129a7614f98bf2445b0
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
<<<<<<< HEAD
*/
function newuser(name, pass) {
  ref  = new Firebase("https://assassinate.firebaseio.com/users/"+name);
    var usersRef = ref.set( 
            {
=======
 */
function newuser(name, pass) {
    ref  = new Firebase("https://assassinate.firebaseio.com/users/"+name);

    var usersRef = ref.set(
        {
>>>>>>> 74e1c149730861e9f822d129a7614f98bf2445b0
            name: name,
            password: pass,
            score: 0,
            t1: name,
            t2: name,
            t3: name,
            t4: name
<<<<<<< HEAD
            }
          );
=======
        }
    );
>>>>>>> 74e1c149730861e9f822d129a7614f98bf2445b0

}