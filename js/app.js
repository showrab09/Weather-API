const loadData = () => {
  const searchData = document.getElementById('searchData');
  if (searchData.value == "") {
    alert("please insert a city name")
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchData.value}&appid=b2e41ed172b0149ead67c863684598bc`
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => displayData(data))
      .catch((error) => displayError(error));
    //clearing the search field
    searchData.value = '';
  }

}
const displayError = (error) => {
  alert("No Data Found");
};
const displayData = (weather) => {
  console.log(weather.name.length);

  const weatherDisplay = document.getElementById('weather-display');
  const temp = Math.floor(weather.main.temp - 273.15);
  weatherDisplay.innerHTML = `
   <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="" />
      <h1>${weather.name} , ${weather.sys.country}</h1>
      <h3><span>${temp}</span>&deg;C</h3>
      <h1 >${weather.weather[0].main}</h1>
  `
  if (temp > 30) {
    document.getElementById('body').style.backgroundImage = "url('images/hot.jpg')";
  }
  else if (temp > 15) {
    document.getElementById('body').style.backgroundImage = "url('images/cloud.jpg')";
  }
  else if (temp > 5) {
    document.getElementById('body').style.backgroundImage = "url('images/day.jpg')";
  }
  else if (temp < 5) {
    document.getElementById('body').style.backgroundImage = "url('images/snow.jpg')";
  }
}
