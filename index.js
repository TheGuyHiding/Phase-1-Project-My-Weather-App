document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
apiKey = "6cbf771c23cdfda9152127c6f0a3d030"
let callWeather = document.querySelector("input");
let SearchBar = document.querySelector("#s");
let SearchBar2 = document.querySelector("#abc");
let cityName = document.querySelector("#city");
let cityTemp = document.querySelector("#temp");
SearchBar2.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+callWeather.value+'&units=imperial&appid='+apiKey)
    .then(res => res.json())
    .then(data => {
        let names = data["name"]
        cityName.innerHTML = `${names}`
        let temp = data["main"]['temp']
        cityTemp.innerHTML = `${temp}°F`
    })
    })

     let Button1 = document.getElementById("hi");

     Button1.addEventListener("click", colorChange);

     function colorChange(){
         document.body.style.backgroundColor = ("lime");
     }