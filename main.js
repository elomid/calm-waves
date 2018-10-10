(function(){
  var clock = document.getElementById('clock');
  var date = document.getElementById('date');

  function displayTime(){
    var now = new Date();
    if (clock && date){
      clock.innerHTML = moment(now).format('hh:mm');
      date.innerHTML = moment(now).format('dddd MMM Do');
    }
  }

  window.addEventListener('load', function() {
    displayTime();
    setInterval(displayTime, 1000 * 60)
  })
})();