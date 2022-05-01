// Strings
// let came = 'NiNa';
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

// console.log(surname.split(''), surname.replace('l','y'))

// let numbers = [1,2,3,4,5]
// let i = 0;
// numbers.forEach((Cases, index) => {
//     switch(Cases){
//         case 1:
//         console.log('Hi');
//         break;
//     }
//     console.log(index);

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
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// const input = document.querySelector('input')
// button.addEventListener('click', () => {
//   // ul.innerHTML += `<li>${input.value}</li>`
//   const li = document.createElement('li');
//   li.textContent = `${input.value}`;
//   // ul.append(li);
//   ul.prepend(li);
//   // li.addEventListener('click', e => {
//   //   e.target.remove();
//   // });
//   // liEvent(li);

// })
// // const items = document.querySelectorAll('li');
// // items.forEach(item => {
// //   item.addEventListener('click', e => {
// //     e.stopPropagation();
// //     e.target.remove();
// //   });
// // });
// ul.addEventListener('click', e => {
//   if(e.target.tagName === 'LI')
//   {
//   console.log(e);
//   e.target.remove();
//   }
//   e.stopPropagation();
// });

// Array methods
// Filter

// Map

// const prices = [20,10,30,25,15,40,80,5];
// const sales = prices.map(price => price / 2)
// console.log(sales);

//Reduce
// const scores = [20,10,30,25,15,40,80,5];

// const result = scores.reduce((acc, curr) =>{
//   if(curr > 50){
//     acc++;
//   }
//   return acc;
// }, 0)
// console.log(result)

//Find
// const scores = [20,10,30,75,15,40,80,5];

// const firstHighScore = scores.find(score => score> 50);
// console.log(firstHighScore);

//Sort
// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// // names.sort();
// names.reverse();
// console.log(names);

// // example 2 - sorting numbers
// const scores = [10, 50, 20, 5, 35, 70, 45];

// // scores.sort();
// scores.reverse();
// console.log(scores);

// // example 3 - sorting objects
// const players = [
//   {name: 'mario', score: 20},
//   {name: 'luigi', score: 10},
//   {name: 'chun-li', score: 50},
//   {name: 'yoshi', score: 30},
//   {name: 'shaun', score: 70}
// ];

// // players.sort((a,b) => {
// //   if(a.score > b.score){
// //     return -1;
// //   } else if (b.score > a.score){
// //     return 1;
// //   } else {
// //     return 0;
// //   }
// // });

// players.sort((a,b) => b.score - a.score);

// console.log(players);

//JSON

// let user = `{
//     "name": "crystal",
//     "age": 30,
//     "email": "exaple@ex.net",
//     "location": "berlin",
//     "blogs": [
//     {"title": "My mood today", "likes":30 },
//     {"title": "Shy person in the subway", "likes":78 }
// ]
// }`
// console.log(JSON.parse(user).name)

//dates & times
// const now = new Date();

// console.log(now);
// console.log(typeof now);

// // years, months, days, times
// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth (0-based):', now.getMonth());
// console.log('getDate:', now.getDate());
// console.log('getDay (0-based):', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

// // timestamps
// console.log('timestamp:', now.getTime());

// // date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());

// const before = new Date('February 1 2019 7:30:59')
// const now = new Date();

// //console.log(before.getTime(), now.getTime())

// const diff = now.getTime() - before.getTime();
// console.log(diff)

// const mins = Math.round(diff / 1000/ 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(days, hours, mins)

// // converting to Date object
// const timestamp = 1236543242353;
// console.log(new Date(timestamp))

// const clock = document.querySelector('#clock');

// const tick = () =>{
//     const now = new Date();
//     let minutes = now.getMinutes();
//     let hours = now.getHours();
//     let seconds = now.getSeconds();
//     if(now.getMinutes() < 10)
//     {
//      minutes = `0${now.getMinutes()}`;
//     }
//     if(now.getSeconds() < 10){
//      seconds = `0${now.getSeconds()}`;
//     }
//     if(now.getHours() < 10){
//         hours = `0${now.getHours()}`;
//        }
//     clock.textContent = `${hours} : ${minutes} : ${seconds}`;
// };
// setInterval(tick,1000);
// const lwrCase = "abcdfeghijklmnopqrstuvwxyz";
// const upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numbers = "1234567890";
// const symbols = "!=()^&$_-=+*";
// const passwordSymbols = lwrCase + upCase + numbers + symbols;
// const shuffle = (characters) => {
//   let generatePassword = "";
//   for (i = 0; i < 12; i++) {
//     let number = Math.round(Math.random() * (characters.length - 1));
//     generatePassword += `${characters[number]}`;
//   }
//   return generatePassword;
// };
//  let password = shuffle(passwordSymbols);
// console.log(password);

// const getTodos = (callback , url) => {
//     const reques = new XMLHttpRequest();

//     reques.addEventListener('readystatechange', () =>{
//         // console.log(reques, reques.readyState);
//         if(reques.readyState === 4 && reques.status === 200)
//         {
//             const data = JSON.parse(reques.responseText);
//             callback(undefined, data);
//         }
//         else if (reques.readyState === 4)
//         {
//           callback('could not fetch data',undefined);
//         }
//       })

//       reques.open('GET', url);
//       reques.send();
// };

// Nesting request's without promises

// getTodos((err, data) => {
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log(data);
//         getTodos((err, data) => {
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(data);
//             }
//         }, 'todos.json');
//     }
// }, 'https://jsonplaceholder.typicode.com/todos');



//with promises

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         //fetch something
//         resolve('some data');
//         //reject('error');
//     }); 
// }
// getSomething().then((data) =>{
//     console.log(data);
// });

// const getTodos = (url) =>{
    
//     return new Promise((resolve, reject) => {
//         const reques = new XMLHttpRequest();

//         reques.open('GET', url);
//         reques.send();
//             reques.addEventListener('readystatechange', () =>{
                
//                 // console.log(reques, reques.readyState);
//                 if(reques.readyState === 4 && reques.status === 200)
//                 {
//                     const data = JSON.parse(reques.responseText);
//                     resolve(data);
//                 }
//                 else if (reques.readyState === 4)
//                 {
//                     reject('error getting resource');
//                 }
//               })
              
//     })
// };
// getTodos('https://jsonplaceholder.typicode.com/todos').then(data=>{
//     console.log(data)
//     return getTodos('todos.json');
// })
// .then(data=>{
//     console.log(data)
// })
// .catch(err => {
//     console.log(err)
// })

//fetch api

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => {
//     if(response.status === 200)
//     {
//         return response.json();
//     }
// })
// .then(data => {
//     console.log(data);
//     return fetch('todos.json')
// })
// .then(response => {
//     if(response.status === 200)
//     {
//         return response.json();
//     }
// })
// .then(data => {
//     console.log(data);
//     return fetch('todos.json')
// })
// .catch(err => {
//     console.log('rejected', err)
// })

// async & await
const getTodos = async () => {
    const response = await fetch('todos.json');
if (response.status !== 200){
    throw new Error('Cannot fetch data');
}
    const data = await response.json();
    return data;
};
getTodos()
.then(data =>{
    console.log('resolved:', data)
})
.catch(err => console.log('rejected', err.message));
