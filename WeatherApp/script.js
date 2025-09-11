const form = document.querySelector("form")
const citySearch = document.querySelector("input")
const city = document.querySelector("h1")
const temperature = document.querySelector("h2")
const humidity = document.querySelector("h5")
const weather = document.querySelector("h3")
const img = document.querySelector("img")
const API = "f6f0915b4e4ebedcaf820b42dac49544"
const getData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`
    const respose = await fetch(url)
    if (!respose.ok) {
        throw new Error("crazy")
    }
    return await respose.json()
}

form.addEventListener("submit",async (event)=>{
    event.preventDefault()
    if (citySearch.value) {
        const data = await getData(citySearch.value)
        city.textContent = data.name
        temperature.textContent = `${(data.main.temp - 273.15).toFixed(2)} °C`
        humidity.textContent = `${data.main.humidity}%`
        weather.textContent = `${data.weather[0].description}`
        img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        console.log(data)
    }
})