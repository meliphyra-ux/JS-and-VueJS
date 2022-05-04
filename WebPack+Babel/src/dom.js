console.log('Dom file');
import './styles.css';

const body = document.querySelector('body');
const styleBody = () => {
    body.style.background = ' peachpuff';
}
const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
}
const name = 'contact';
const createList = () =>{
    const li = document.createElement('li');
    li.textContent = 123;
    body.appendChild(li);
    li.classList.add('hello');
    
}
export {styleBody,addTitle,name, createList};

