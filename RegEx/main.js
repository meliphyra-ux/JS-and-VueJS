const form = document.querySelector(".signup-form");
const h2 = document.querySelector('h2')
const pattern = /^[a-zA-Z]{6,12}$/;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;
  let result = pattern.test(username);
  if (result) {
    h2.textContent = "hooray";
  } else {
    h2.textContent = "Nah";
  }
});
form.username.addEventListener("keyup", (e) => {
 if(pattern.test(form.username.value))
 {
   form.username.setAttribute('class','correct')
 }
 else{
  form.username.setAttribute('class','incorrect')
 }
  
});
// const username = 'shadaa';
// const pattern = /^[a-z]{6,}$/;
// // let result = pattern.test(username);
// let result = username.search(pattern);
// console.log(result);
