/**
 * Created by Seth on 2/21/2015.
 */
$(document).ready(function(){
    var hidden1=true;
    $("#login").click(function(){
  if(hidden1) {
            $("#hideme1").slideDown();
            hidden1=false;
      }
        else{
            $("#hideme1").slideUp();
   hidden1=true;
        }
    });
    var hidden2=true;
    $("#newuser").click(function() {
            if (hidden2) {
            $("#hideme2").slideDown();
            hidden2 = false;
        }
		else {
            $("#hideme2").slideUp();
            hidden2 = true;
        }
    });
});