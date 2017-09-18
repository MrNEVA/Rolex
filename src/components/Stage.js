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

//Hours
ctx.fillStyle = "#333333"
ctx.fillRect(0, 0, vw, vh)
ctx.beginPath()
ctx.arc(vw / 2, vh / 2, vw / 4, degToRad(270), degToRad(hours * 15) -90)
ctx.stroke()

//Minutes
ctx.beginPath()
ctx.arc(vw / 2, vh / 2, vw / 5, degToRad(270), degToRad(minutes * 6) -90)
ctx.stroke()
//Seconds5nPath()
ctx.beginPath()
ctx.arc(vw / 2, vh / 2, vw / 6, degToRad(270), degToRad(newSeconds * 6) -90)
ctx.stroke()
//Date


//Time



}
