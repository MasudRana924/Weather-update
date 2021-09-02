const keys = `5d4353fe827169c76cf5d9e65fc4af3a`
const searchTemperature = () => {
    const input = document.getElementById('city-name')
    const cityName = input.value
    input.value = ''

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keys}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayShowTemperature(data))

}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text
}
const displayShowTemperature = temperature => {
    setInnerText('city', temperature.name)
    setInnerText('temperature', temperature.main.temp)
    setInnerText('condition', temperature.weather[0].main)

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon')
    imgIcon.setAttribute('src', url)
}