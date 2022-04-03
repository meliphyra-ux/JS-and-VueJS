// Strings
// let came = 'Nina';
// came  = came.toLowerCase();
// console.log(came.length)
// for(var i = 0; i < came.length; i++)
// {
//  came = came.replace('n','w');
// }
// came = came[0].toUpperCase() + came.slice(1, came.length);
// console.log(came);
// console.log(came.substring(1,3));

//Numbers
// let radius = 10;
// const pi = 3.14;

// let result = pi * radius**2;
// console.log(result);
//Arrow function

// const greet = () =>'hello world';
// console.log(greet());
// let surname = 'hello'

// console.log(surname.split(''),surname.replace('l','y'))

// let numbers = [1,2,3,4,5]
// let makeIn = [6,7,8,9]
// let i = 0;
// numbers.forEach((Cases, index, makeIn) => {
//     switch(Cases){
//         case 1: 
//         console.log('Hi');
//         break;
//     }
//     console.log(index);
//     console.log(makeIn);
       
// });
// const callBack = () => console.log('hello world');
// numbers.forEach(callBack);

// Objects
// let user = {
//     name: 'crystal', 
//     age: '30',
//     email: 'exaple@ex.net',
//     location: 'berlin',
//     blogs: [
//     {title: 'My mood today', likes:30 },
//     {title: 'Shy person in the subway', likes:78 }
// ],
//     login: () => {
//         console.log('The user logged in');
//     }, // Стрелочные функции использовать в методах объектов с this не стоит
//     logBlogs: function(){
//         console.log("User has written the following blogs: ");
//         this.blogs.forEach(blog =>{
//             console.log(blog);
//         });
//     },
//         logBlogs2(){
//         console.log("User has written the following blogs: ");
//         this.blogs.forEach(blog =>{
//             console.log(`Blog title: ${blog.title}, likes: ${blog. likes}`);
//         });
//     }
    
    

// }
// user.logBlogs2();

// console.log(Math);
// const random = Math.random();
// console.log(Math.round(random * 100))

// DOM Query
// const para = document.querySelector('p');
// para.innerText = 'Hello dumbass';
// console.log(para);
// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
// console.log(para.innerText);
// para.innerText += ' new text';
// });
// console.log(paras)
const content = document.querySelector('.pale');
const link = document.querySelector('body > a')
console.log(link.getAttribute('href'))
const contact = 'tel:+380992395067';
link.setAttribute('href',contact)




const btnClickAdd = () => {
    content.innerHTML += ' <h1>This is new text</h2>';
}
const btnClickDelete = () => {
    content.innerHTML = '<p> Litle Garden </p>';

}