
// HTML references
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend    = document.querySelector('#btnSend');

// client socket 
const socket = io();

// listeners
socket.on('connect', () => { 
    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';
});

socket.on('disconnect', () => { 
    lblOffline.style.display = '';
    lblOnline.style.display  = 'none';
});

socket.on('send-message', (payload) => {
    console.log(payload);
});

// events 
btnSend.addEventListener('click', () => {
    const message = txtMessage.value; 
    const payload = {
        message,
        id: 'asd',
        date: new Date().getDate()
    }
    socket.emit('send-message', payload, ( id ) => {
        console.log('from server ', id);
    });
});