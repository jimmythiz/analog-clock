const setTime = () => {
 let currentTime = new Date()
 let currentSecond = currentTime.getSeconds() * 6
 let currentMinute = currentTime.getMinutes() * 6
 let currentHour = currentTime.getHours() * 30 + Math.round(currentMinute/12)
 hour = document.querySelector(`.hour`)
 minute = document.querySelector(`.minute`)
 second = document.querySelector(`.second`)
    second.style.transform = `rotate(${currentSecond}deg)`
    minute.style.transform = `rotate(${currentMinute}deg)`
    hour.style.transform = `rotate(${currentHour}deg)`
}
setInterval(setTime,1000)
