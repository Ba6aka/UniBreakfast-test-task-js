function deleteMessage(){
    const messageContainer = document.querySelector('.messages');
    messageContainer.addEventListener('click', (e) => {
        if (e && e.target.nodeName == 'BUTTON'){ 
          localStorage.setItem(e.target.id, e.target.id);
          location.reload();
        }
        
    });
   
}

export default deleteMessage;