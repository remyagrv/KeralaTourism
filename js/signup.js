function registrationValid()
{
    var regName = /^[a-zA-Z]+$/;
    let regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    var Fname = document.getElementById('fname');
    var Lname = document.getElementById('lname');
    let email = document.getElementById("email"); 
    if(!regName.test(Fname.value)){
        alert('Invalid firstname given!');
        return false;
    }else if(!regName.test(Lname.value)){
        alert('Invalid lastname given!');
        return false;
    }else if(!regemail.test(email.value)){
        alert('Invalid Email!');
        return false;
    }
    else if((regName.test(Fname.value))&&(regName.test(Lname.value))&&(regemail.test(email.value)))
    return true;
}
    
