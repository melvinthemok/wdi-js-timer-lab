// basic implementation

var seconds = 0
var timerId
var intervalID

function updateTime () {
  seconds = Number(seconds) + 0.1
  seconds = seconds.toFixed(1)
  $('#timer').html('Time elapsed: ' + seconds + ' seconds')
}

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
