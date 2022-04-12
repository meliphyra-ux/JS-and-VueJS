const button = document.querySelector('button');
const ul = document.querySelector('ul');
const input = document.querySelector('div#container>input');
const img = document.querySelector('img#close');
const imgOpen = document.querySelector('img#open');
const range = document.querySelector('#range');
const controlHeader = document.querySelector('#controlHeader');
ul.addEventListener('click', e => {
    if(e.target.tagName == 'LI')
    {
        if(e.target.classList == 'line'){
            e.target.classList.add('unline');
            e.target.classList.remove('line');
        }
        else{
            e.target.classList.remove('unline');
            e.target.classList.add('line');
        }
    }
    e.stopPropagation();

});
ul.addEventListener('dblclick', e => {
    if(e.target.tagName == 'LI')
    {
        e.target.remove();
    }
    e.stopPropagation();
});
button.addEventListener('click', () => {
    if(input.value != ''){
    const li = document.createElement('li');
    li.classList.add('line');
    li.textContent = `${input.value}`;
    ul.prepend(li);
    input.value = '';
    }
    else{
        alert('Write something in to-do list')
    }
});
img.addEventListener('click', e =>{
    const aside = document.querySelector('aside');
   
    var animation = aside.animate([
        {left: '0px'},
        {left: '-400px'}
    ], 200);
    animation.addEventListener('finish', () =>{
        aside.style.left = '-400px';
    });
    
});

imgOpen.addEventListener('click', e =>{
    const aside = document.querySelector('aside');
    
    var animation = aside.animate([
        {left: '-400px'},
        {left: '0px'}
    ], 200);
    animation.addEventListener('finish', () =>{
        aside.style.left = '0px';
    });
    
});
range.addEventListener('change', e => {
    console.log(range.value)
    controlHeader.textContent = `Current font size: ${range.value}`;
    ul.setAttribute('style',`font-size: ${range.value}px`)
    
});
const wrapper = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const popup = document.querySelector('#contacts');
const popupbox = document.querySelector('.popup-content');


popup.addEventListener('click', e => {
    wrapper.style.display = 'block';
});

close.addEventListener('click', e => {
    wrapper.style.display = 'none';
    e.stopPropagation();
    
});
wrapper.addEventListener('click', e => {
    if(e.target == wrapper) wrapper.style.display = 'none';
    
});