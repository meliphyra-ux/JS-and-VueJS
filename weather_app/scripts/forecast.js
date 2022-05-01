const key = 'HnIEZhwsxHGEUorPYQYZbJsmqXlZd0G6';

// const weatherCast = async (city) => {
// //getting City information

//     const getCity = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city},`)
//     const getLocationKey = await getCity.json();

// // getting Weather

//     const getCondition = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${getLocationKey[0].Key}?apikey=${apiKey}`)
//     const data = await getCondition.json();
//     return data[0];
// };

const getWeather = async (id) => {
  
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
  
    const response = await fetch(base + query);
    const data = await response.json();
  
    return data[0];
  
  };
  
  // get city information
  const getCity = async (city) => {
  
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
  
    const response = await fetch(base + query);
    const data = await response.json();
  
    return data[0];
  
  };