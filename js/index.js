var pausenbu = document.getElementById('pausenbutton');
var beginbu = document.getElementById('beginbutton');
var kreuzbu = document.getElementById('kreuzbutton');
var datenbu = document.getElementById('datenbutton');
var minbu = document.getElementById('minutenbutton');
var state = 'play';

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bodymovin'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './data/data.json'
})

pausenbu.addEventListener('click', () => {
  if(state === 'play') {
    animation.pause();
     state = 'pause';
   } else {
     animation.play();
     state = 'play';
   }

})

beginbu.addEventListener('click', () => {
  animation.goToAndPlay(0, 100);
})

kreuzbu.addEventListener('click', () => {
  animation.goToAndPlay(300, 100);
})

datenbu.addEventListener('click', () => {
  animation.goToAndPlay(1600, 100);
})

minbu.addEventListener('click', () => {
  animation.goToAndPlay(3610, 100);
})