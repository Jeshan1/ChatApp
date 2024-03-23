const socket = io()
let userName = "";
let textArea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
while (!userName) {
    userName = prompt("Enter your name...")
}

textArea.addEventListener('keyup',(e)=>{
    if (e.key === 'Enter') {
        sendMessage(e.target.value)
        console.log("hello")
    }
})

function sendMessage(message){
    const msg = {
        user:userName,
        message:message.trim()
    }

    appendMessage(msg,'outgoing')
    textArea.value = ""
    scrollToBottom()

    socket.emit('message',msg)
}

function appendMessage(msg,type){
    const messageDiv = document.createElement('div')
    const className = type
    messageDiv.classList.add(className,'message')

    let messageContent = `
                            <h4>${msg.user}</h4>
                            <p>${msg.message}</p>
                        `
    messageDiv.innerHTML = messageContent
    messageArea.appendChild(messageDiv)

}

//receive message
socket.on('message',(msg)=>{
    appendMessage(msg,'incoming')
    scrollToBottom()
})

function scrollToBottom(){
    messageArea.scrollTop = messageArea.scrollHeight
}