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
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("pass");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span class="badge progress-bar-success">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span class= "badge progress-bar-warning">Medium!</span>';
    } else {
        strength.innerHTML = '<span class= "badge progress-bar-danger">Weak!</span>';
    }
}

    // var strengthc = document.getElementsById('strengthc');
    // var pwdc = document.getElementsById("cpass");
    // if (pwdc.value.length == 0) {
    //     strengthc.innerHTML = 'Type Password';
    // } else if (false == enoughRegex.test(pwdc.value)) {
    //     strengthc.innerHTML = 'More Characters';
    // } else if (strongRegex.test(pwdc.value)) {
    //     strengthc.innerHTML = '<span class="badge progress-bar-success">Strong!</span>';
    // } else if (mediumRegex.test(pwdc.value)) {
    //     strengthc.innerHTML = '<span class= "badge progress-bar-warning">Medium!</span>';
    // } else {
    //     strengthc.innerHTML = '<span class= "badge progress-bar-danger">Weak!</span>'; 
    // }
    function passwordConfirm() {
        var strengthc = document.getElementById('strengthc');
        var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{8,}).*", "g");
        var cpwd = document.getElementById("cpass");
        if (cpwd.value.length == 0) {
            strengthc.innerHTML = 'Type Password';
        } else if (false == enoughRegex.test(cpwd.value)) {
            strengthc.innerHTML = 'More Characters';
        } else if (strongRegex.test(cpwd.value)) {
            strengthc.innerHTML = '<span class="badge progress-bar-success">Strong!</span>';
        } else if (mediumRegex.test(cpwd.value)) {
            strengthc.innerHTML = '<span class= "badge progress-bar-warning">Medium!</span>';
        } else {
            strengthc.innerHTML = '<span class= "badge progress-bar-danger">Weak!</span>';
        }
    }
    