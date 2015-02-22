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
  alert(name.value);
  console.log(name.value);
  console.log(pass.value);
  var user = db.child("users/"+name).on("value",  function(snapshot){
    if (snapshot.val() != null){
      alert("please pick a different user name, u bitch");
    }else{
      var db = new Firebase("https://assassins.firebaseio.com/users/"+name.value);
      var user = {
              passkey: pass,
              score: 0,
              targets: {
                t1: "random",
                t2: "jan",
                t3: "seth",
                t4: "david"
          }
      }
      db.set(user);
    }
  });
}

//////////////////UserInfo.html///////////////
function populatePlayerInfo(player){
  var db = new Firebase("https://assassins.firebaseio.com/");
  
//  var user = db.child("users/"+name.value).on("value", function(snapshot){
//    for 
//  }
}




























