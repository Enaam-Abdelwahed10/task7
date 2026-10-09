const forbiddenWords = [
    "رقم ","تواصل","واتساب","خارج","رقمك","اتصل"
];
function checkMessage(message){
    const lowerMessage = message.toLowerCase();
    const matchedWords = new Set();
    forbiddenWords.forEach(word =>{
        if(lowerMessage.includes(word)){
            matchedWords.add(word);
        }
    });
    if(matchedWords.size>= 2){
        console.log(`هذه الجملة غير مرغوب فيها داخل المنصة!(الكلمات المكتشفة:{Array.form(matchedWords).join(',')})`);

        
    }else{
        console.log("الرسالة مقبولة.");   
    }


}