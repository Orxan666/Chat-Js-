var chat = document.getElementById("chat")
var miniChat = document.getElementById("mini-chat")
var inpMessage = document.getElementById("myMessage")
var mainChat = document.querySelector("#chat main")
miniChat.onclick = function () {
    chat.classList.toggle("active")
}
inpMessage.onkeyup = function (a) {
    if (a.keyCode == 13) {

        var myInpVal = this.value;
        if (myInpVal.trim() != "") {
            if (myInpVal[0].toUpperCase() == myInpVal[0]) {
                var messageDiv = document.createElement("div")
                messageDiv.className = "message admin"
                var pTag = document.createElement("p")
                pTag.innerText = myInpVal;
                var myDate = new Date();
                var pTagDate = document.createElement("p")
                pTagDate.className = "time"
                pTagDate.innerText = myDate.getHours() + ":" + myDate.getMinutes()
                messageDiv.appendChild(pTag)
                messageDiv.appendChild(pTagDate)
                mainChat.appendChild(messageDiv)
            }
else{
    var messageDiv = document.createElement("div")
    messageDiv.className = "message user"
    var pTag = document.createElement("p")
    pTag.innerText = myInpVal;
    var myDate = new Date();
    var pTagDate = document.createElement("p")
    pTagDate.className = "time"
    pTagDate.innerText = myDate.getHours() + ":" + myDate.getMinutes()
    messageDiv.appendChild(pTag)
    messageDiv.appendChild(pTagDate)
    mainChat.appendChild(messageDiv)
}
mainChat.scrollTop=mainChat.scrollHeight

        }

    }
}