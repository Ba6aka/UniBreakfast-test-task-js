import { getData } from "../servises/servises";

function createNewMessage() {
    function addNewItem(data) {
        data.forEach(( { id, message, author, dateTime } ) => {
            if (id ) {
                console.log(localStorage.getItem('delete'))
                const parent = document.querySelector('.messages');
                const newItem = document.createElement('div');

                newItem.innerHTML = `
                    <div class="messages__item">
                    <div class="text">${message}</div>
                    <div class="message__td">
                        <div id=${author} class="author">${author}</div>
                        <div class="message__date">${dateTime}</div>
                    </div>
                    <button id="${id}">delete</button>
                `;

                parent.append(newItem);
            }
        } );
    }

    getData('http://localhost:3000/message')
        .then(data => addNewItem(data));
}

export default createNewMessage;
