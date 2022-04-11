function setDate() {
    const date = new Date()

    const sec = date.getSeconds() * 6 + 90
    const min = date.getMinutes() * 6 + 90
    const hour = date.getHours() * 6 + 90

    document.querySelector('.second-hand').style = `transform: rotate(${sec}deg)`

    document.querySelector('.min-hand').style = `transform: rotate(${min}deg)`

    document.querySelector('.hour-hand').style = `transform: rotate(${hour}deg)`
}

setInterval(setDate, 1000)
