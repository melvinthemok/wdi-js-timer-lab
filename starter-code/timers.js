var seconds = 0
var timerId
var intervalID

$('#reset').on('click', function () {
  clearInterval(intervalID)
  seconds = 0
  $('#timer').html('Stop Watch')
})

$('#start').on('click', function () {
  intervalID = setInterval(updateTime, 1000)
})

$('#pause').on('click', function () {
  clearInterval(intervalID)
})

function updateTime () {
  seconds += 1
  $('#timer').html('Time elapsed: ' + seconds + ' seconds')
}
//
// var timer = {
//
// }
