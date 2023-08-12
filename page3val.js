function validate(){
    d_name=form2.dname.value;
    if(d_name.length>30){
        alert('Department name should not be greater than 30 characters');
        return false;
    }
    alert('Form submitted successfully !!!!');
    return true;
}