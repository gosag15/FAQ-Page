const questions = document.querySelectorAll(".accordion");//selects all questions
function revealAnswer(){
    const Answer = this.nextElementSibling;//selects the answer for each question
    if(Answer.style.display === "block"){
        Answer.style.display = "none"
    }else{
        Answer.style.display = "block"
    }
}
questions.forEach(question => question.addEventListener("click", revealAnswer))
