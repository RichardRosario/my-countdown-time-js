const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

// let futureDate = new Date(2020,5,11,10,0,0)

const futureDate = new Date(tempYear,tempMonth,tempDay + 10, 11,59,0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const seconds = futureDate.getSeconds()

let month = futureDate.getMonth()
month = months[month]

const date = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()]

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`


const futureTime = futureDate.getTime()

function getRemainingTime(){
  const today = new Date().getTime()

  const t = futureTime - today
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h
  
  // convert value in ms
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  const oneSecond = 1000

  // calculate all values
  let days = t/oneDay
  days = Math.floor(days)
  let hours = Math.floor((t % oneDay)/oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinute)  
  let seconds = Math.floor((t%oneMinute) / oneSecond)

  // set array values

  const values = [days,hours,minutes,seconds]

  function formatOutput(item){
    if(item<10){
      return item = `0${item}`
    }
    return item
  }

  items.forEach(function(item,index){
    item.innerHTML = formatOutput(values[index])
  })
  if(t<0){
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">Sorry you are passed the deadline!</h4>`
  }

  
}
// countdown
let countdown = setInterval(getRemainingTime,1000)


getRemainingTime()
