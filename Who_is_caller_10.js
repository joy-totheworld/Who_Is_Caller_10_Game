
var posts = document.getElementsByClassName("caller-avatar-default");
var callingAvatar = document.getElementById("caller-avatar-calling");
const startButton = document.getElementById("start-button");

// console.log(callingAvatar)
// console.log (callingAvatar.innerHTML)
// console.log(posts[Math.floor(Math.random() * (posts.length))])
// console.log(Math.floor(Math.random() * (posts.length)));

var callerNumber = 0;
var callerNumber10 = "";
var currcaller = null;
var originalAvatar = null;

// window.setTimeout(displayCallingAvatar, 1100)
startButton.addEventListener("click", start);


function start () {
    const backdrop = document.getElementById("modal-backdrop");
    backdrop.classList.add("hidden");
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");
    displayCallingAvatar ()
}

function displayCallingAvatar (){
    revertAvatar ()
    callerNumber++;
    console.log("caller no: ", callerNumber)
    posts = document.getElementsByClassName("caller-avatar-default");
    currcaller = posts[Math.floor(Math.random() * (posts.length))]
    if (callerNumber == 10) {
        callerNumber10 = currcaller.id.replace('caller-', '')
    }
    currcaller.classList.remove("caller-avatar-default");
    originalAvatar = currcaller.innerHTML
    // console.log(originalAvatar)
    console.log(currcaller.id)
    currcaller.innerHTML = callingAvatar.innerHTML
    currcaller.classList.add("calling-avatar");
    console.log(posts.length)
    if (posts.length > 0) {
        window.setTimeout(displayCallingAvatar, 1100)
    }
    else {
        window.setTimeout(revertAvatar, 1100)
        console.log("caller number 10: ", callerNumber10)
        getAnswer ()
    }
}

function revertAvatar (){
    if ((currcaller != null)&&(originalAvatar != null)) {
        currcaller.innerHTML = originalAvatar
        currcaller.classList.remove("calling-avatar");
        currcaller.classList.add("caller-avatar-called");
    }
}

function getAnswer () {
    const backdrop = document.getElementById("modal-backdrop");
    backdrop.classList.remove("hidden");
    const modalText = document.getElementById("modal-text");
    modalText.innerHTML = "Who was caller number 10? <br> Enter the lowercase alphabet identifier of the winning bear."
    const startButton = document.getElementById("start-button");
    startButton.classList.add("hidden");
    const submitButton = document.getElementById("submit-button");
    submitButton.classList.remove("hidden");
    const answerInput = document.getElementById("answer-input");
    answerInput.classList.remove("hidden");
    const modal = document.getElementById("modal");
    modal.classList.remove("hidden");
    submitButton.addEventListener("click", validate);
}

function validate () {
    const answerInput = document.getElementById("answer-input");
    answerInput.classList.add("hidden");
    const submitButton = document.getElementById("submit-button");
    submitButton.classList.add("hidden");
    const modalText = document.getElementById("modal-text");
    if (answerInput.value == callerNumber10) {
        console.log(answerInput.value)
        console.log(callerNumber10)
        modalText.innerHTML = "You are correct!"
    }
    else {
        console.log(answerInput.value)
        console.log(callerNumber10)
        modalText.innerHTML = "That poor bear only wishes he won the jar..."
    }
}
