export default (canvas, ctx, vw, vh, audio, mouse) => {
renderTime(ctx, vw, vh)
}
function degToRad(degree) {
const factor = Math.PI / 180
return degree*factor
}

function renderTime(ctx, vw, vh){



const now = new Date()
const today = now.toDateString()
const time = now.toLocaleTimeString()
const hours = now.getHours()
const minutes = now.getMinutes()
const seconds = now.getSeconds()
const milliseconds = now.getMilliseconds()
const newSeconds = seconds + (milliseconds / 1000)

//Background

ctx.strokeStyle = "#880099"
ctx.lineWidth = 17
ctx.lineCap = "round"
ctx.shadowBlur = 15
ctx.shadowColor = "#880099"

//Hours
ctx.fillStyle = "#333333"
ctx.fillRect(0, 0, vw, vh)
ctx.beginPath()
ctx.arc(vw / 2, vh / 2, vw / 4, degToRad(270), degToRad(hours * 15) -90)
ctx.stroke()

//Minutes
ctx.beginPath()
ctx.arc(vw / 2, vh / 2, vw / 4 -25, degToRad(270), degToRad(minutes * 6) -90)
ctx.stroke()
//SecondsPath()
ctx.beginPath()
ctx.arc(vw / 2, vh / 2, vw / 4 -50, degToRad(270), degToRad(newSeconds * 6) -90)
ctx.stroke()
//Date
ctx.font = "25px impact"
ctx.fillStyle = "#880099"
ctx.fillText(today, vw /2 - 65, (vh / 2) + 50)
//Time
ctx.font = "bold 35px impact"
ctx.fillStyle = "#880099"
ctx.fillText(time, vw /2 - 65, (vh / 2) + 20)

}
