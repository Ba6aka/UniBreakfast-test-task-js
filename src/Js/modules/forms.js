import { postData } from "../servises/servises";
import createNewMessage from "./create-newmessage";

function forms() {

    //!FORMS REQUEST
    const forms = document.querySelectorAll('form');


    forms.forEach(item => {
        bindPostData(item);
    });
    


    function bindPostData(form) {

        form.addEventListener('submit', (e) => {

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/messages', json)
                .then((data) => {
                    console.log(data);
                }).catch(() => {
                }).finally(() => {
                    form.reset();
                });

        });
        createNewMessage();
    }
}

export default forms;