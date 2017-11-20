$(document).ready(() => {
  $('.instrument').on('click', 'button', function(event) {
    let audioElement = document.getElementById(`${$(this).html()}Audio`);
    // console.log(audioElement);
    audioElement.load();
    audioElement.play();
  });
});
