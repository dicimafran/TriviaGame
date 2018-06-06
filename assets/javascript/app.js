/* Pseudocoding- my goal for now shall be the basic version of the trivia game
    
    This triviagame presents questions for the user to answer within a time limit. 
    Each click on an answer returns a value indicating whether the user's answer is true or false.
    The trivia game logs the following
        Correct Answers
        Incorrect Answers
        Unanswered

    Inputs
        User's selected answer out of 4 answers.
    
    Outputs
        Present a button which calls the window timer function
        Present Trivia questions and answers to choose from
        Keep a scoreboard for the following    
            Correct Answers
            Incorrect Answers
            Unanswered
        
    Process
        Start button screen hides the questions
        
        Time limit which starts by default. It might be better to have a start button.
             var windowTimeout = setTimeout(function() {
                alert("Alert #1. Muwahahahaa! U have no choice!");
             }, 1000);

        T/F values maybe make a class or id for T/F
             $(".t").on("click")
                
*/