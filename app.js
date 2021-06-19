const questions = document.querySelectorAll(".accordion");
function revealAnswer(){
    const Answer = this.nextElementSibling;
    if(Answer.style.display === "block"){
        Answer.style.display = "none"
    }else{
        Answer.style.display = "block"
    }
}
questions.forEach(question => question.addEventListener("click", revealAnswer))
