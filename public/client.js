const socket = io()
let userName = "";
let textarea = document.getElementById('textarea')
while (!userName) {
    userName = prompt("Enter your name...")
}

textarea.addEventListener('keyup',(e)=>{
    if (e.target === 'Enter') {
        sendMessage(e.target.value)
    }
})

function sendMessage(message){
    const msg = {
        user:userName,
        message:message.trim()
    }

    appendMessage(msg,'outgoing')
    textarea.value = ""

    socket.emit('message',msg)
}

function appendMessage(msg,type){
    const messageDiv = document.createElement('div')
    
}