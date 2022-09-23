function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = "";
    }
}

function seterror(id, error){
    //sets error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;

    if(name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;

    if(email.length>30){
        seterror("email", "*Length of email is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;

    if(phone.length != 10){
        seterror("phone", "*Phone no. should be of 10 digits");
        returnval = false;
    }

    return returnval;

}