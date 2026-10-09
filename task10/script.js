function filterEmail(email){
    if(email.toLowerCase().includes("test")){
        return false ;
    }
    return true ;
}
function processUsers(){
    const userCount = parseInt(prompt("ادخل عدد المستخدمين الين تريد اضافتهم: "), 10);
    const allUsers = [] ;
    for(let i = 0 ; i< userCount ; i++){
        const name = prompt(`enter your name ${i+1}:`)
        const email = prompt (`enter your email ${i+1}:`);
        allUsers.push ({name, email});
    }
    const validUsers = allUsers.filter(user => filterEmail(user.email));
    
    console.log("جميع المستخدمين المدخلين:" ,allUsers);
    console.log("المستخدمين المقبولين فقط (باستثناء كلمة test): " , validUsers);
    return validUsers;
     
}
processUsers();