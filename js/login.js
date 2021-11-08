function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function validate(){  
  let email = document.getElementById("email");  
  let password = document.getElementById("myInput"); 
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
  let pwdreg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    
  if(password.value.length < 8)
    {
      alert("Password must be at least 8 characters long."); 
      return false; 
    }
  else if ((regex.test(email.value))&&(pwdreg.test(password.value)))
  {
      
      return true;
  } else {
     alert("Incorrect Email and Password");
      return false;
  }
  
      
 
  
    //   else if(pwdreg.test(password.value)){
    //     alert("Incorrect Password");
    //     return false;
    //   }
    // else{
    //   return true;
    // }
  }