function registrationValid()
{
    var regName = /^[a-zA-Z]+$/;
    let regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    var phonereg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    var Fname = document.getElementById('fname');
    var Lname = document.getElementById('lname');
    let email = document.getElementById("email"); 
    let phno = document.getElementById("phn");
    let password = document.getElementById("pass");
    let cpassword = document.getElementById("cpass");
    let pwdregu = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(!regName.test(Fname.value)){
        alert('Invalid firstname given!');
        return false;
    }else if(!regName.test(Lname.value)){
        alert('Invalid lastname given!');
        return false;
    }else if(!regemail.test(email.value)){
        alert('Invalid Email!');
        return false;
    }else if(!phonereg.test(phno.value)){
        alert('Invalid Mobile Number!');
        return false;
    
    }else if((!pwdregu.test(password.value))||(!pwdregu.test(cpassword.value))){
        alert('Invalid Password!');
        return false;
    }else if(password.value!=cpassword.value){
        alert('Passwords did not match!');
        return false;
    }
    else((regName.test(Fname.value))&&(regName.test(Lname.value))&&(regemail.test(email.value))&&(phonereg.test(phno.value)))
    {
    return true;
}


}
function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    var mediumRegex = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
    
    var pwd = document.getElementById("pass");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="background-color:green" >Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="background-color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="background-color:red">Weak!</span>';
    }
}