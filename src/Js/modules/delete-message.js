function deleteMessage() {
  const messageContainer = document.querySelector('.messages');
  const obj = {}
  messageContainer.addEventListener('click', (e) => {
    if (e?.target.nodeName == 'BUTTON') {
      obj.e.target.id = [e.target.id]
      localStorage.setItem('dlt',obj );
      location.reload();
    }
  });
}

export default deleteMessage;

