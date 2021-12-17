const url = "https://api.openweathermap.org/data/2.5/"
const key = "" // API Key'i openweather.org'dan ücretsiz bir şekilde alıp kullanabilirsiniz.



const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })

    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerHTML = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp = temp.innerHTML = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerHTML = "Hava " + result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerHTML = `En az ${Math.round(result.main.temp_min)}°C / En çok ${Math.round(result.main.temp_max)}°C`
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener("change", getCity);

function getCity(e) {
    getResult(searchBar.value)
}