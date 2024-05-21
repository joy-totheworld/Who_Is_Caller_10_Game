
var posts = document.getElementsByClassName("caller-avatar-default");
var callingAvatar = document.getElementById("caller-avatar-calling");
// console.log (callingAvatar.innerHTML)
// console.log(posts[Math.floor(Math.random() * (posts.length))])
// console.log(Math.floor(Math.random() * (posts.length)));

var callerNumber = 0;
var callerNumber10 = "";
var currcaller = null;
var originalAvatar = null;

window.setTimeout(displayCallingAvatar, 1100)

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
    currcaller.innerHTML = callingAvatar.innerHTML
    currcaller.classList.add("calling-avatar");
    console.log(posts.length)
    if (posts.length > 0) {
        window.setTimeout(displayCallingAvatar, 1100)
    }
    else {
        window.setTimeout(revertAvatar, 1100)
    }
}

function revertAvatar (){
    if ((currcaller != null)&&(originalAvatar != null)) {
        currcaller.innerHTML = originalAvatar
        currcaller.classList.remove("calling-avatar");
        currcaller.classList.add("caller-avatar-called");
    }
}

// while (posts.length > 0) {
//     var currcaller = posts[Math.floor(Math.random() * (posts.length))]
//     currcaller.classList.remove("caller-avatar-default");
    
//     currcaller.classList.add("caller-avatar-called");
//     var posts = document.getElementsByClassName("caller-avatar-default");
//     console.log(posts.length)
// }