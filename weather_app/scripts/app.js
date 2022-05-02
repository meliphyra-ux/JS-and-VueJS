// const cityForm = document.querySelector('.change-location')
// const temp = document.querySelector('span');
// const cityName = document.querySelector('h5')

// const changeWeather = async (city) => {
//     const weatherInfo = weatherCast(city)
//     return weatherInfo;
// };

// cityForm.addEventListener('submit', e =>{
//     e.preventDefault();
//     const city = cityForm.city.value;
//     cityForm.reset();
//     cityName.textContent = city;
//     changeWeather(city)
//     .then(data =>{
//         temp.textContent = data.Temperature.Metric.Value;
//     })
//     .catch(err => console.log('error: ',err))
// });

const cityForm = document.querySelector('form');
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('.time');
const icon = document.querySelector('.icon > img')
const forecast = new Forecast();

const updateUI = data =>{
  const { cityDets, weather } = data;

  //update details template 
  details.innerHTML = `
  <h5 class="my-3">${cityDets.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  `
  icon.setAttribute('src', `img/icons/${weather.WeatherIcon}.svg`)

  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSrc);
  //remove d-none class
  if(card.classList.contains('d-none'))
  {
    card.classList.remove('d-none');
  }
};

if(localStorage.getItem('city'))
{
  forecast.updateCity(localStorage.getItem('city'))
.then(data => updateUI(data))
.catch(err => console.log(err));
}

cityForm.addEventListener('submit', e => {
  // prevent default action
  e.preventDefault();
  
  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with new city
  forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});