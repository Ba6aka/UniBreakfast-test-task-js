import { postData } from "../servises/servises";

function forms() {
    //!FORMS REQUEST
    const forms = document.querySelectorAll('form');

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            const formData = new FormData(form);
            const today = new Date();
            const now = today.toLocaleString();

            let autorColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            let authorName = document.getElementById('author-name').value;
            
            formData.append('dateTime', now);

            if (!localStorage.getItem(authorName)) {
                localStorage.setItem(authorName, autorColor);
            }
            
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            
         

            postData('http://localhost:3000/message', json)
                .then((data) => {
                    console.log(data);
                }).catch(() => {
                }).finally(() => {
                    form.reset();
                });

        });
        
    }
}

export default forms;