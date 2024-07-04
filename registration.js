function validateform() {
    var name = document.getElementById('name');
    var email = document.myform.email.value
    var password = document.getElementById('password');
    var password1 = document.getElementById('password1');


    if (name.value == null || name.value == "") {
        alert("Name can't be blank");
        return false;

    }
   
    if (password.value == "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }

    if (password.value.length != "") {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        if (regex.test(password.value) === false) {
            alert("Please enter a valid pwd");
            return false;
        }
    }
    if (password.value != password1.value) {
        alert("Password mismatch");
        return false;
    }


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    else {
        alert("You have entered an invalid email address!")
        return (false)
    }

}
function start()
{
document.getElementById("name").addEventListener("focus",focusone, false );
document.getElementById("name").addEventListener("blur", blurone, false );
document.getElementById("contact number").addEventListener("focus",focustwo, false );
document.getElementById("contact number").addEventListener("blur", blurone, false );
document.getElementById("email").addEventListener("focus",focustwo, false );
document.getElementById("email").addEventListener("blur", blurone, false );
document.getElementById("DOB").addEventListener("focus",focustwo, false );
document.getElementById("DOB").addEventListener("blur", blurone, false );
document.getElementById("password").addEventListener("focus",focustwo, false );
document.getElementById("confirm password").addEventListener("blur", blurone, false );
document.getElementById("myform").addEventListener("submit",subfun, false );
document.getElementById("myform").addEventListener("reset",resetfun, false );
}
function focusone()
{
    document.getElementById("enter your name").innerHTML="name";
}
function focustwo() 
{document.getElementById("enter yourcontact number").innerHTML="number" ;
}
function focusthree() 
{document.getElementById("xzy@gmail.com").innerHTML="email" ;
}
function focusfour() 
{document.getElementById("help").innerHTML="DOB" ;
}
function focusfive() 
{document.getElementById("enter your password").innerHTML="password" ;
}
function focusix() 
{document.getElementById("enter your password").innerHTML="confirm password" ;
}
function blurone() 
{ document.getElementById("help").innerHTML="" ;
}
function subfun() 
{ window.alert("Are you Sure to submit");
  window.alert("Thank you");
}
function resetfun() 
{window.alert("Are you Sure to reset")}
