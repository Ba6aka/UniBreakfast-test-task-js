import { getData } from "../servises/servises";

function setAuthorsBGColor (){
    
    function renderColor(data){

        data.forEach(({author}) =>{
           
            if(document.getElementById(author)){
                document.getElementById(author).style.backgroundColor = localStorage.getItem(author);
                document.querySelectorAll(`#${author}`).forEach(ar =>{
                    ar.style.backgroundColor = localStorage.getItem(author);
                });
            }
         
        });
    }
  
    getData('http://localhost:3000/message')
    .then(data => renderColor(data));
}

export default setAuthorsBGColor;