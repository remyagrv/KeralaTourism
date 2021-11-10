function registrationValid()
{
    var regName = /^[a-zA-Z]+$/;
    let regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    var phonereg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let pwdreg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var Fname = document.getElementById('fname');
    var Lname = document.getElementById('lname');
    let email = document.getElementById("email"); 
    let phno = document.getElementById("phn");
    let timeout;
let password = document.getElementsById('password');
let cpassword = document.getElementsById('password');
// let strengthBadge = document.getElementById('StrengthDisp');

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

    }else if((!pwdreg.test(password.value))||(!pwdreg.test(cpassword.value))) {
        alert('Invalid Password!');
        return false;

    } else if(password.value!=cpassword.value) {
        alert('');
        return false;
        
    }
    else if((regName.test(Fname.value))&&(regName.test(Lname.value))&&(regemail.test(email.value))&&(phonereg.test(phno.value)))
    return true;
}

