let userName = prompt("enter your name: ");
let userAge = prompt("enter your age: ");
let user = {
    name:userName,
    age:userAge,
    hasAccess: userAge>20 
};
if(user.hasAccess){
    alert("hello"  + user.name );
} else{
    alert("soory" +  user.name +  "ages under 21 are not allowed.");
}