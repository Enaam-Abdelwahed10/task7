const users = [
    {name: "ahmed" , email: " ahmed1@gamil.com", type: "admin" },
{name:"enaam" ,email:" enaam ahed@gamil.com" , type:"user"},
{name: "nana" , email: " nanaabdelwahed1@gamil.com", type: "user" },
{name: "khawla" , email: " khawla1@gamil.com", type: "admin" },


];
let adminCount = 0;
let userCount = 0;
users.forEach(person => {
    if (person.type === "admin") {
        adminCount++ ;
        
    } else if (person.type === "user"){
        userCount++ ;   
    } 
})
console.log( "عدد ال admin: ", adminCount);
console.log("عدد ال user: " , userCount);