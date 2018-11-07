// Global Javascript star background
'use strict';

var wH = window.innerHeight;
var wW = window.innerWidth;

var generateStars = function generateStars(n) {
  for (var i = 0; i < n; i++) {
    var div = document.createElement('div');
    div.className = i % 20 == 0 ? 'star star--big' : i % 9 == 0 ? 'star star--medium' : 'star';
    div.setAttribute('style', 'top:' + Math.round(Math.random() * wH) + 'px;left:' + Math.round(Math.random() * wW) + 'px;animation-duration:' + (Math.round(Math.random() * 3000) + 3000) + 'ms;animation-delay:' + Math.round(Math.random() * 3000) + 'ms;');
    document.body.appendChild(div);
  }
};
generateStars(150);

// Global Javascript for back button
var backButton = document.querySelector('.back-button')

function backAnim(){
  if (backButton.classList.contains('back')){
    backButton.classList.remove('back');
  }
  else{
    backButton.classList.add('back');
    setTimeout(backAnim, 1000);
  }
}
backButton.addEventListener('click', backAnim);
