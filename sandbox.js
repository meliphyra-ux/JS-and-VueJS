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
// const content = document.querySelector('.pale');
// const link = document.querySelector('body > a')
// console.log(link.getAttribute('href'))
// const contact = 'tel:+380992395067';
// link.setAttribute('href',contact)




// const btnClickAdd = () => {
//     content.innerHTML += ' <h1>This is new text</h2>';
// }
// const btnClickDelete = () => {
//     content.innerHTML = '<p> Litle Garden </p>';

// }
// const title = document.querySelector('.title');
// console.log(title.style);
// title.style.margin = "50px";
// title.style.fontSize = "60px"
// console.log(title.classList);
// title.classList.add('error');
// title.classList.remove('title');
//My function;
// const finding = document.querySelectorAll('div > p')
// finding.forEach(paragraph => {
//     let singleWord = paragraph.textContent.split(' ');
//     singleWord.forEach(word => {
//         if(word == 'error')
//         {
//             paragraph.classList.add('error');
//         }
//         else if(word =='success'){
//             paragraph.classList.add('success');
//         }
//         else;
//     })
// })
//More comlicated code
// const finding = document.querySelectorAll('div > p')
// finding.forEach(p =>{
    
//     if(p.textContent.includes('error'))
//     {
//       p.classList.add('error');
//     }
//     else if(p.textContent.includes('success'))
//     {
//       p.classList.add('success');
//     }
//     else;
// })
// const title = document.querySelector('p');
// title.classList.toggle('message');
// console.log(title.classList);
// title.classList.toggle('message');
//Parent and child methods
// const article = document.querySelector('.pale');
// console.log(article.children)
// Array.from(article.children).forEach(child => {
//   child.classList.add('article-element');
// });
// const title = document.querySelector('h2');
// console.log(title.parentElement);
// const button = document.querySelectorAll('button');
// button.addEventListener('click', () => {
//    console.log('You clicked on me');
// });
// const liEvent = (list) => {
//   list.addEventListener('click', e => {
//     e.target.remove();
//   });
// }
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input')
button.addEventListener('click', () => {
  // ul.innerHTML += `<li>${input.value}</li>`
  const li = document.createElement('li');
  li.textContent = `${input.value}`;
  // ul.append(li);
  ul.prepend(li);
  // li.addEventListener('click', e => {
  //   e.target.remove();
  // });
  // liEvent(li);

})
// const items = document.querySelectorAll('li');
// items.forEach(item => {
//   item.addEventListener('click', e => {
//     e.stopPropagation();
//     e.target.remove();
//   });
// });
ul.addEventListener('click', e => {
  if(e.target.tagName === 'LI')
  {
  console.log(e);
  e.target.remove();
  }
  e.stopPropagation();
});
