let eventListener=document.querySelector('.circle');
eventListener.addEventListener('click',()=> {
    let apiKey='8fa608cd53c6c54241aa6558c71f4571';
    let cityName=document.querySelector('.search').value;
    if(cityName==='') {
        alert("Enter the city name");
    } else {
        getWeatherInfo(apiKey,cityName);
    }
})
async function getWeatherInfo(apiKey,cityName) {
    try {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
        let response=await fetch(url);
        let data=await response.json();
        console.log(data);
        document.querySelector('.image').innerHTML=`<img class="cloud" src="images/${data.weather[0].main}.png">`;
        document.querySelector('.temp').innerHTML=`${data.main.temp}°C`;
        document.querySelector('.city-name').innerHTML=`${data.name}`;
        document.querySelector('.humidity').innerHTML=`${data.main.humidity}%`;
        document.querySelector('.wind-speed').innerHTML=`${data.wind.speed} km/hr`;
        document.querySelector('.remaining').style.display="block";

    } catch(error) {
        alert('Something went wrong, Try again!');
    }
}