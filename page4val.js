function redirect(){
    window.location.href = "page5.html";
}
function validate(){
    var f_name=form3.pfname.value;
    var l_name=form3.plname.value;
    var pg_name=form3.pgname.value;
    var phn_no =form3.pphnno.value;
    var number = /^[0-9]+$/;
    var alph = /^[A-Za-z]+$/;
    if(!f_name.match(alph)){
        alert('Patient first name should contain only letters');
        return false;
    }
    if(f_name.length>20){
        alert('Length of patient first name cannot be greater than 20');
        return false;
    }
    if(!l_name.match(alph)){
        alert('Patient last name should contain only letters');
        return false;
    }
    if(l_name.length>20){
        alert('Length of patient last name cannot be greater than 20');
        return false;
    }
    if(!pg_name.match(alph)){
        alert('Father/spouse name should contain only letters');
        return false;
    }
    if(pg_name.length>20){
        alert('Length of father/spouse name cannot be greater than 20');
        return false;
    }
    if(phn_no.length!=10){
        alert('Length of Phone number should be equal to 10');
        return false;
     }
     redirect();
     return true;
}