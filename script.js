let questions = [
    
  
        {
            question: "Who is the author of *Things Fall Apart*?",
            options: ["A) Wole Soyinka", "B) Chinua Achebe", "C) Chimamanda Adichie", "D) Ngugi wa Thiong’o"],
            answer: "B) Chinua Achebe"
        },
        {
            question: "What is the primary purpose of literature?",
            options: ["A) To entertain", "B) To educate", "C) To inform", "D) All of the above"],
            answer: "D) All of the above"
        },
        {
            question: "Which of the following is NOT a type of drama?",
            options: ["A) Tragedy", "B) Comedy", "C) Satire", "D) Poetry"],
            answer: "D) Poetry"
        },
        {
            question: "Which literary device compares two things using 'like' or 'as'?",
            options: ["A) Metaphor", "B) Simile", "C) Personification", "D) Irony"],
            answer: "B) Simile"
        },
        {
            question: "Which Nigerian playwright wrote *The Lion and the Jewel*?",
            options: ["A) Chinua Achebe", "B) Wole Soyinka", "C) Ola Rotimi", "D) J.P. Clark"],
            answer: "B) Wole Soyinka"
        },
        {
            question: "What is the meaning of 'democracy'?",
            options: ["A) Government by the elite", "B) Government by the military", "C) Government by the people", "D) Government by the wealthy"],
            answer: "C) Government by the people"
        },
        {
            question: "What is the highest court in Nigeria?",
            options: ["A) Court of Appeal", "B) Federal High Court", "C) Supreme Court", "D) Customary Court"],
            answer: "C) Supreme Court"
        },
        {
            question: "Which of the following is NOT a form of government?",
            options: ["A) Monarchy", "B) Democracy", "C) Feudalism", "D) Oligarchy"],
            answer: "C) Feudalism"
        },
        {
            question: "Who was the first executive president of Nigeria?",
            options: ["A) Olusegun Obasanjo", "B) Goodluck Jonathan", "C) Nnamdi Azikiwe", "D) Shehu Shagari"],
            answer: "D) Shehu Shagari"
        },
        {
            question: "What does the term 'sovereignty' mean?",
            options: ["A) The ability to control wealth", "B) Supreme power of a state", "C) The ability to make laws", "D) Control over elections"],
            answer: "B) Supreme power of a state"
        },
        {
            question: "Which of the following is an example of a pressure group?",
            options: ["A) INEC", "B) NLC", "C) EFCC", "D) APC"],
            answer: "B) NLC"
        },
        {
            question: "What is another term for 'freedom of the press'?",
            options: ["A) Press neutrality", "B) Freedom of speech", "C) Press censorship", "D) Press restriction"],
            answer: "B) Freedom of speech"
        },
        {
            question: "What is the purpose of a constitution?",
            options: ["A) To limit citizens' rights", "B) To organize political parties", "C) To define the laws of a country", "D) To increase taxation"],
            answer: "C) To define the laws of a country"
        },
        {
            question: "Which of the following is NOT a fundamental human right?",
            options: ["A) Right to education", "B) Right to vote", "C) Right to own a car", "D) Right to life"],
            answer: "C) Right to own a car"
        },
        {
            question: "Who wrote *Julius Caesar*?",
            options: ["A) Christopher Marlowe", "B) William Shakespeare", "C) George Orwell", "D) John Milton"],
            answer: "B) William Shakespeare"
        },
        {
            question: "What type of poem tells a story?",
            options: ["A) Lyric", "B) Sonnet", "C) Epic", "D) Elegy"],
            answer: "C) Epic"
        },
        {
            question: "Which of the following is NOT a type of drama?",
            options: ["A) Tragedy", "B) Comedy", "C) Fiction", "D) Melodrama"],
            answer: "C) Fiction"
        },
        {
            question: "Which of these is an art form?",
            options: ["A) Painting", "B) Singing", "C) Sculpture", "D) All of the above"],
            answer: "D) All of the above"
        },
        {
            question: "What is the term for a government where one person has total power?",
            options: ["A) Democracy", "B) Oligarchy", "C) Dictatorship", "D) Federalism"],
            answer: "C) Dictatorship"
        },
        {
            question: "Which of these is a principle of democracy?",
            options: ["A) Military rule", "B) Rule of law", "C) Corruption", "D) Absolute power"],
            answer: "B) Rule of law"
        },
        {
            question: "Who is regarded as the father of modern African literature?",
            options: ["A) Chinua Achebe", "B) Ngugi wa Thiong'o", "C) Wole Soyinka", "D) Leopold Senghor"],
            answer: "A) Chinua Achebe"
        },
        {
            question: "Which color is NOT a primary color?",
            options: ["A) Red", "B) Blue", "C) Green", "D) Yellow"],
            answer: "C) Green"
        },
        {
            question: "Which of the following is a sculpture technique?",
            options: ["A) Chiseling", "B) Knitting", "C) Sketching", "D) Painting"],
            answer: "A) Chiseling"
        },
        {
            question: "Who wrote *Oliver Twist*?",
            options: ["A) William Shakespeare", "B) Charles Dickens", "C) Emily Brontë", "D) Jane Austen"],
            answer: "B) Charles Dickens"
        },
        {
            question: "What does a calligrapher specialize in?",
            options: ["A) Painting", "B) Drawing", "C) Beautiful handwriting", "D) Sculpture"],
            answer: "C) Beautiful handwriting"
        },
        {
            question: "What is the name of the Nigerian currency?",
            options: ["A) Dollar", "B) Cedi", "C) Naira", "D) Shilling"],
            answer: "C) Naira"
        },
        {
            question: "Which of these is NOT a part of speech?",
            options: ["A) Noun", "B) Adjective", "C) Pronoun", "D) Article"],
            answer: "D) Article"
        },
        {
            question: "What does a historian study?",
            options: ["A) Past events", "B) Human behavior", "C) Natural disasters", "D) Political theories"],
            answer: "A) Past events"
        },
        {
            question: "Which country is known as the ‘Giant of Africa’?",
            options: ["A) Ghana", "B) Nigeria", "C) South Africa", "D) Kenya"],
            answer: "B) Nigeria"
        }
    ];
    

let shuffledQuestions = [];
let userAnswers = new Array(questions.length).fill(null);
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 75*60; // 10 minutes in seconds
let startTime, endTime;

function startQuiz() {
let firstName = document.getElementById("first-name").value.trim();
let surname = document.getElementById("surname").value.trim();

if (firstName === "" || surname === "") {
    alert("Please enter your first name and surname before starting.");
    return;
}

document.getElementById("user-fullname").textContent = firstName + " " + surname;

shuffledQuestions = shuffleArray(questions);
document.getElementById("name-section").style.display = "none";
document.getElementById("quiz-section").style.display = "block";

startTime = new Date();
loadQuestion();
startTimer();
createNavigation();
}

function loadQuestion() {
let q = shuffledQuestions[currentQuestionIndex];
document.getElementById("question").innerText = q.question;
// Display question number with answered check
let questionNumberHtml = `Question ${currentQuestionIndex + 1}`;
if (userAnswers[currentQuestionIndex] !== null) {
    questionNumberHtml += " ✔"; // Add a checkmark if answered
}
document.getElementById("question-number").innerHTML = questionNumberHtml;
let optionsHtml = "";
q.options.forEach(option => {
    let isSelected = userAnswers[currentQuestionIndex] === option ? "style='background-color: lightblue;'" : "";
    optionsHtml += `<button class="option-btn" ${isSelected} onclick="selectAnswer('${option}')">${option}</button>`;
});
document.getElementById("options").innerHTML = optionsHtml;
document.querySelector("button[onclick='prevQuestion()']").style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
document.getElementById("submit-btn").style.display = currentQuestionIndex === shuffledQuestions.length - 1 ? "inline-block" : "none";
document.querySelector("button[onclick='nextQuestion()']").style.display = currentQuestionIndex === shuffledQuestions.length - 1 ? "none" : "inline-block";
}

function selectAnswer(selectedOption) {
userAnswers[currentQuestionIndex] = selectedOption;
loadQuestion();
}

function prevQuestion() {
if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
}
}

function nextQuestion() {
if (currentQuestionIndex < shuffledQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
}
}


function endQuiz() {
// Check for unanswered questions
let unansweredQuestions = [];
shuffledQuestions.forEach((q, index) => {
    if (userAnswers[index] === null) {
        unansweredQuestions.push(`Q${index + 1}: ${q.question}`);
    }
});
// If there are unanswered questions, show a confirmation dialog
if (unansweredQuestions.length > 0) {
    let unansweredCount = unansweredQuestions.length;
    let message = `You have ${unansweredCount} unanswered questions:\n\n` + unansweredQuestions.join("\n") + "\n\nDo you still want to submit your answers?`";
    
    if (!confirm(message)) {
        return; // If the user clicks "Cancel", exit the function
    }
}
clearInterval(timer);
document.getElementById("quiz-section").style.display = "none";
document.getElementById("result-section").style.display = "block";
endTime = new Date();
let timeSpent = Math.floor((endTime - startTime) / 1000);
let minutes = Math.floor(timeSpent / 60);
let seconds = timeSpent % 60;
document.getElementById("time-spent").textContent = `${minutes} min ${seconds} sec`;
let correctCount = 0;
let correctionsHtml = "";
userAnswers.forEach((ans, i) => {
    if (ans === shuffledQuestions[i].answer) {
        correctCount++;
    } else {
        correctionsHtml += `<li><strong>Q:</strong> ${shuffledQuestions[i].question} <br> 
                            <strong>Correct Answer:</strong> ${shuffledQuestions[i].answer} </li>`;
    }
});
document.getElementById("score").textContent = correctCount;
document.getElementById("total-questions").textContent = shuffledQuestions.length;
document.getElementById("corrections").innerHTML = correctionsHtml;
let adviceMessage = "";
if (correctCount === shuffledQuestions.length) {
    adviceMessage = "Excellent job! You got all questions right.";
} else if (correctCount >= shuffledQuestions.length / 2) {
    adviceMessage = "Good effort! Keep practicing to improve.";
} else {
    adviceMessage = "You need more practice. Review the corrections and try again!";
}
document.getElementById("advice-message").textContent = adviceMessage;
}

function shuffleArray(array) {
return array.sort(() => Math.random() - 0.5);
}

function startTimer() {
timer = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
    } else {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;
    }
}, 1000);
}

function createNavigation() {
let navHtml = "";
shuffledQuestions.forEach((_, i) => {
    let answered = userAnswers[i] !== null; // Check if the question has been answered
    let buttonStyle = answered ? "style='background-color: black; color: white;'" : ""; // Change color if answered
    navHtml += `<button class="nav-btn" ${buttonStyle} onclick="goToQuestion(${i})">${i + 1}</button>`;
});
document.getElementById("question-nav").innerHTML = navHtml;
}

function goToQuestion(index) {
currentQuestionIndex = index;
loadQuestion();
}

