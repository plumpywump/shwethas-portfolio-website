console.log ("Hello, Welcome to my Portfolio Site")

function menuToggle() {
    var x = document.getElementById('mynavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    } 
  }