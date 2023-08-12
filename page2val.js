function validate(){
    var f_name=form1.fname.value;
    var l_name=form1.lname.value;
    var phn_no =form1.phnno.value;
    var mail=form1.email.value;
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var number = /^[0-9]+$/;
    var alph = /^[A-Za-z]+$/;
    if(!f_name.match(alph)){
        alert('First name should contain only letters');
        return false;
    }
    if(f_name.length>20){
        alert('Length of first name cannot be greater than 20');
        return false;
    }
    if(!l_name.match(alph)){
        alert('Last name should contain only letters');
        return false;
    }
    if(l_name.length>20){
        alert('Length of last name cannot be greater than 20');
        return false;
    }
    if(!mail.match(validRegex)){
        alert('Enter a valid email address');
        }
    if(!phn_no.length==10){
       alert('Length of Phone number should be equal to 10');
       return false;
    }
    alert('Form is submitted successfully !!!!!');
    window.location.replace= "page5.html";
}