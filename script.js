/*Login
1 validate name exists
2 check if passkey is equal
3 move to Player info page
*/
function login(name, pass) {
  "use strict";
  alert(name.value);
  console.log(pass.value);
  var db = new Firebase("https://assassins.firebaseio.com/");
  
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
}

//Set sample data
function setTemplate() {
  var db = new Firebase("https://assassins.firebaseio.com/");
  var userTemplate = {
      "users": {
        "stapler" :{
          passkey: "123",
          score: 0,
          targets: {
            t1: "kat",
            t2: "jan",
            t3: "seth",
            t4: "david"
          }
        }
      }
  };
  db.set(userTemplate);
}
//-----------------------------------
function createUser(name,pass){
  playerName = name.value;
  alert(name.value);
  console.log(name.value);
  console.log(pass.value);
      var db = new Firebase("https://assassins.firebaseio.com/");
  
//  if (db.child("users/"+name.value)!=null){
//    alert("duplicate name");
//  }else{
//    alert("good!");
//  }
  var user = db.child("users/"+playerName).on("value", function(snapshot){
    if (snapshot.val() != null){
      alert("please pick a different user name");
    }else{
      var user = {
         playerName :{        
          passkey: pass.value,
          score: 0,
          targets: {
            t1: "random",
            t2: "jan",
            t3: "seth",
            t4: "david"
          }
        }
      }
      db.set(user);
    }
  });
}

function newuser(name, pass) {
    var ref  = new Firebase("https://assassinate.firebaseio.com/");

  ref.child("users/"+name.value).on("value", function(snapshot){
      console.log(snapshot.val());
      if (snapshot.val() != null){
           alert("Sorry name already exists, please pick a new one");
      }else{ 
        ref = new Firebase("https://assassinate.firebaseio.com/users/"+name.value);
        var usersRef = ref.set({
            password: pass.value,
            score: 0,
            t1: name.value,
            t2: name.value, 
            t3: name.value,
            t4: name.value
        });
      }
    }
);}

//////////////////UserInfo.html///////////////
//function populatePlayerInfo(player){
//  var db = new Firebase("https://assassins.firebaseio.com/");
  
//  var user = db.child("users/"+name.value).on("value", function(snapshot){
//    for 
//  }
//}




























