/*Login
1 validate name exists
2 check if passkey is equal
3 throw error or print name, score, targets
*/
function login(name, pass) {
  "use strict";
  console.log(name);
  console.log(pass);
  var db = new Firebase("https://assassins.firebaseio.com/");
  
  var user = db.child("users/"+name).on("value", function(snapshot){
    if (snapshot.val()==null){
      alert("Username or password doesn't exists");
    }
    else if (snapshot.val().passkey != pass){
      alert("WRONG PASSWORD!!!!!!!!!!....or username");
    }else{
//      var table = document.getElementById('targets');
      var tableContents="";
      for (var key in snapshot.val().targets){
        var val = snapshot.val().targets[key];
        tableContents+="<tr><td>" + val + "</td></tr>";
      }
      $('#targets').append(tableContents);
      $('#targets').append("<tr><td> Score:" + snapshot.val().score + "</td></tr>");
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
  console.log(name);
  console.log(pass);
  var user = db.child("users/"+name).on("value",  function(snapshot){
    if (snapshot.val() != null){
      alert("please pick a different user name, u bitch");
    }
  }
  var db = new Firebase("https://assassins.firebaseio.com/users/"+name);
  var user = {
          passkey: pass,
          score: 0,
          targets: {
            t1: "random",
            t2: "jan",
            t3: "seth",
            t4: "david"
      }
  };
  db.set(user);
  
}






























