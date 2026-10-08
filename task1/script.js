function checkEmail(){
    let email = document.getElementById('email').value;
    let message = document.getElementById('message');
    if(email.includes('@gmail.com')){
        message.innerText = "البريد الاكتروني صحيح ";
        message.style.color ="green";

    }else {
        message.innerText = "البريد خطأ:يجب ان يحتوي على @gmail.com";
        message.style.color ="red";

    }
}