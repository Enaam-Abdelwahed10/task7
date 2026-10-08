let questions = [
    {
        questions:"number of day in aweek? ",
        answers:[5,6,3,8] ,
        correct: 2,
    };
     {
        questions:"Best player in the world?  ",
        answers:["messi", "ronaldo" ,"peleh" , "maradona"] ,
        correct: 1,
    };
     {
        questions:"what the cocor of the sky? ",
        answers:["black" ,"green" , "blue" , "white"] ,
        correct: 2,
    };
    questions.forEach(function (item){
        let questions = `${item.question}
        1. ${item.answers[0]}
        2. ${item.answers[1]}
        3. ${item.answers[2]}
        4. ${item.answers[3]}
        Enter your answer

        `;
        let answer = Number (prompt(question));      
    });
        
]