let questions = [
    { 
        question: "Which of the following is NOT a part of a computer?", 
        options: ["A) CPU", "B) Monitor", "C) Light bulb"], 
        answer: "C) Light bulb" 
    },
    { 
        question: "What is the main function of the CPU?", 
        options: ["A) Store data", "B) Process instructions", "C) Display images"], 
        answer: "B) Process instructions" 
    },
    { 
        question: "Which software is used for creating presentations?", 
        options: ["A) MS Word", "B) MS Excel", "C) MS PowerPoint"], 
        answer: "C) MS PowerPoint" 
    },
    { 
        question: "Which of the following is an input device?", 
        options: ["A) Monitor", "B) Keyboard", "C) Speaker"], 
        answer: "B) Keyboard" 
    },
    { 
        question: "What does RAM stand for?", 
        options: ["A) Random Access Memory", "B) Read-Only Memory", "C) Remote Access Module"], 
        answer: "A) Random Access Memory" 
    },
    { 
        question: "Which key is used to delete text to the left of the cursor?", 
        options: ["A) Delete", "B) Backspace", "C) Escape"], 
        answer: "B) Backspace" 
    },
    
    
        { 
            question: "How do you open Microsoft PowerPoint?", 
            options: [
                "A) Click the Start menu, type 'PowerPoint,' and press Enter", 
                "B) Double-click on any document on the desktop", 
                "C) Open File Explorer and search for PowerPoint", 
                "D) Press Ctrl + P on your keyboard"
            ], 
            answer: "A) Click the Start menu, type 'PowerPoint,' and press Enter"
        },
       
        { 
            question: "What can you find under the Quick Access Toolbar?", 
            options: [
                "A) Save, Undo, Redo, and Custom Commands", 
                "B) Pictures, Shapes, and Icons", 
                "C) Network Settings and Battery Status", 
                "D) Volume Control and Brightness"
            ], 
            answer: "A) Save, Undo, Redo, and Custom Commands"
        },
        { 
            question: "What does the front screen of Microsoft PowerPoint contain?", 
            options: [
                "A) Slides, Ribbon, Quick Access Toolbar, and Slide Pane", 
                "B) Clock, Calendar, and Task Manager", 
                "C) Google Search Bar and YouTube Link", 
                "D) Volume Control and Power Button"
            ], 
            answer: "A) Slides, Ribbon, Quick Access Toolbar, and Slide Pane"
        },
        { 
            question: "How can you save your work in Microsoft PowerPoint?", 
            options: [
                "A) Click the File menu, select Save or press Ctrl + S", 
                "B) Click the Ribbon and press the Spacebar", 
                "C) Restart your computer", 
                "D) Open the Task Manager and close PowerPoint"
            ], 
            answer: "A) Click the File menu, select Save or press Ctrl + S"
        },
        { 
            question: "What is the Microsoft Office Button used for?", 
            options: [
                "A) Saving, Opening, Printing, and Closing files", 
                "B) Turning off the computer", 
                "C) Searching the internet", 
                "D) Changing wallpapers"
            ], 
            answer: "A) Saving, Opening, Printing, and Closing files"
        },
        { 
            question: "What does animation do in PowerPoint?", 
            options: [
                "A) Moves objects, text, or pictures in a slide", 
                "B) Changes slide backgrounds", 
                "C) Deletes slides automatically", 
                "D) Takes screenshots of slides"
            ], 
            answer: "A) Moves objects, text, or pictures in a slide"
        },
        { 
            question: "What is the difference between Animation and Transition?", 
            options: [
                "A) Animation is applied to objects, while Transition is applied to slides", 
                "B) Both are the same", 
                "C) Transition is for images only, while Animation is for text only", 
                "D) Animation happens automatically, while Transition needs a mouse click"
            ], 
            answer: "A) Animation is applied to objects, while Transition is applied to slides"
        },
        { 
            question: "How do you use the Cut function in PowerPoint?", 
            options: [
                "A) Select the object, press Ctrl + X, and then paste it where needed", 
                "B) Close PowerPoint and restart the computer", 
                "C) Right-click and press Delete", 
                "D) Click on the Quick Access Toolbar"
            ], 
            answer: "A) Select the object, press Ctrl + X, and then paste it where needed"
        },
        { 
            question: "If you want to select anything on your computer using a mouse, which part do you click?", 
            options: [
                "A) Left button of the mouse", 
                "B) Right button of the mouse", 
                "C) Scroll wheel", 
                "D) Power button"
            ], 
            answer: "A) Left button of the mouse"
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

