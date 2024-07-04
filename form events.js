<script>
window.addEventListener("load",start,false);
function start()
{
    document.getElementById("fname").addEventListener("focus",focusone, false );
    document.getElementById("fname").addEventListener("blur", blurone, false );
    document.getElementById("roll").addEventListener("focus",focustwo, false );
    document.getElementById("roll").addEventListener("blur", blurone, false );
    document.getElementById("myform").addEventListener("submit",subfun, false );
    document.getElementById("myform").addEventListener("reset",resetfun, false );
}
function focusone() 
{document.getElementById("help").innerHTML="Enter name";
}
function focustwo() 
{document.getElementById("help").innerHTML="Enter rollno";
}
function blurone() 
{ document.getElementById("help").innerHTML=" ";
}
function subfun() 
{ window.alert("Are you Sure to submit");
  window.alert("Thank you");
}
function resetfun() 
{window.alert("Are you Sure to reset")}
</script>