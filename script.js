

let userName = document.getElementById("Name");
let email = document.getElementById("Email");
let comment = document.getElementById("txt");
let form = document.querySelector("form");

function validateForm(){

    //check username is not empty 

    if(userName.value.trim()==="" ){
        onError(userName, "User Name cannot be empty");
    } 
    else{
        if(userName.value.length < 5 || userName.value.length > 25){
            onError(userName, "User Name can't be less than 5 characters");
        }else{  
        onSuccess(userName);
        }
    }

    // check Email address is valid

    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }

    //Message

    if(comment.value.trim()==="" ){
        onError(comment,"Message cannot be emputy");
    }else{
        if( comment.value.length > 100){
            onError(comment,"Message should be less than 100 characters");
        }else{  
        onSuccess(comment);
    }
    }

}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateForm();
});

function onSuccess(input){
    let parent = input.parentElement;
    let messageEle = parent.querySelector("span");
    messageEle.style.visibility = "hidden"; 
}

function onError(input, message){
    let parent = input.parentElement;
    let messageEle = parent.querySelector("span");
    messageEle.style.visibility = "visible";
    messageEle.style.color = "red";
    messageEle.style.display = "block";
    messageEle.innerText = message;  
}

function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


