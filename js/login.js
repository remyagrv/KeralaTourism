function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function validate(){  
  // let username = document.getElementById("usernm");  
  let password = document.getElementById("myInput");  
    if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false; 
    } 
    else{
      return true;
    }
  }