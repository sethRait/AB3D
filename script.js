/*Login
1 validate name exists
2 check if passkey is equal
3 throw error or print name, score, targets
*/
function login(name, pass) {
  "use strict";
  console.log(name);
  console.log(pass);
  /*ignore jslint start*/
  var db = new Firebase("https://assassins.firebaseio.com/");
  /*ignore jslint end*/
}
//Set sample data
//function setTemplate() {
//  /*ignore jslint start*/
//  var db = new Firebase("https://assassins.firebaseio.com/");
//  /*ignore jslint end*/
//  var userTemplate = {
//      "users": {
//        user1: {
//          name: "stapler",
//          passkey: "123",
//          score: 0,
//          targets: {
//            t1: "kat",
//            t2: "jan",
//            t3: "seth",
//            t4: "david"
//          }
//        }
//      }
//  };
//  db.set(userTemplate);
//}

//function readFirst() {
//  "use strict";
//  /*ignore jslint start*/
//  var db = new Firebase("https://assassins.firebaseio.com/");
//  /*ignore jslint end*/
//  
//  var one = db.child("users/user1/name").on("value", function(snapshot){
//    console.log(snapshot.val());
//  });
  
  
//  var one = db.child("users/user1/name").on("value", function(snapshot){
//    alert(snapshot);
//  }
//  
//  var first = db.child("users/user1/targets/t1").on("value", function(snapshot){
//    alert(snapshot.val());
//});
//}

/**
Login button code
  1 Recieve player name
  2 Check if valid name
  3 Print error if not 
  4 Print name, score, targets
**/
//function login(name) {
//  var db = new Firebase("https://assassins.firebaseio.com/");
//  
//  var userTemplate = {
//    name: "stapler",
//    passkey: "123",
//    score: 0,
//    targets: {
//      t1: "kat",
//      t2: "jan",
//      t3: "seth",
//      t4: "david"
//    }
//  };
//  db.set(userTemplate);
//}