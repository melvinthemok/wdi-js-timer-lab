// basic implementation

var seconds = 0
var intervalID

function updateTime () {
  seconds = Number(seconds) + 0.1
  seconds = seconds.toFixed(1)
  $('#timer').html('Time elapsed: ' + seconds + ' seconds')
}

// note that the time is not accurate > 4ms interval
// if you wanted accuracy you could do:
// var date = newDate()
// var lastTime = date.getTime()
// setInterval(function() {
//   var date = newDate()
//   var currentTime = date.getTime()
//   var diff = currentTime - lastTime
//   totalTime += diff
//   lastTime = currentTime
// }, 50)

$('#reset').on('click', function () {
  clearInterval(intervalID)
  seconds = 0
  $('#timer').html('Stop Watch')
})

$('#start').on('click', function () {
  clearInterval(intervalID)
  intervalID = setInterval(updateTime, 100)
})

$('#pause').on('click', function () {
  clearInterval(intervalID)
})
//
// //bonus implementation
//
// var timer = {
//   seconds: 0,
//   timerID: undefined,
//   intervalID: undefined,
//   updateTime: function () {
//     timer.seconds = Number(timer.seconds) + 0.1
//     timer.seconds = timer.seconds.toFixed(1)
//     $('#timer').html('Time elapsed: ' + timer.seconds + ' seconds')
//   }
//
// }
