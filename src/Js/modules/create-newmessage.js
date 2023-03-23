import { getData } from "../servises/servises";

function createNewMessage() {

    function addNewItem(data) {
        data.forEach(({ message, author, dateTime }) => {
            const parent = document.querySelector('.messages');
            const newItem = document.createElement('div');
            newItem.innerHTML = `
            <div class="messages__item">
            <div class="text">${message}</div>
            <div class="message__td">
                <div class="author">${author}</div>
                <div class="message__date">${dateTime}</div>
            </div>`;

            parent.append(newItem);

        });
    }

    getData('http://localhost:3000/message')
        .then(data => addNewItem(data));
}

export default createNewMessage;
