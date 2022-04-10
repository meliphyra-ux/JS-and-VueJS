const wrapper = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const popup = document.querySelector('button');


popup.addEventListener('click', () => {
    wrapper.style.display = 'block';
});

close.addEventListener('click', () => {
    wrapper.style.display = 'none';
});
wrapper.addEventListener('click', () => {
    wrapper.style.display = 'none';
});