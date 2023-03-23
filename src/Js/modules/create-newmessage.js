import { getData } from "../servises/servises";

function createNewMessage() {

    function addNewItem(data) {
        data.forEach(({ message, author }) => {
            const parent = document.querySelector('.messages');
            const newItem = document.createElement('div');
            newItem.innerHTML = `
            <div class="messages__item">
            <div class="text">${message}</div>
            <div class="author">${author}</div>
        </div>`;

            parent.append(newItem);

        });
    }

    getData('http://localhost:3000/messages')
        .then(data => addNewItem(data));
}

export default createNewMessage;
