console.log("This is my js file");
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var namee = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var humid = document.querySelector('.humidity');
var press = document.querySelector('.press');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=f0fa503fcf94e1ea2983903d14a1dc12')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var humidValue = data['main']['humidity'];
        var pressValue = data['main']['pressure'];

        namee.innerHTML = nameValue;
        temp.innerHTML = "Temperature:- "+tempValue;
        desc.innerHTML = "Discription:- "+descValue;
        humid.innerHTML = "Humidity:- "+humidValue;
        press.innerHTML = "Pressure:- "+pressValue;
    })

.catch(err => alert("Wrong city name!"))
})