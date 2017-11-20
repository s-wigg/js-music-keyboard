$(document).ready(() => {
  $('.instrument').on('click', 'button', function music() {
    const audioElement = document.getElementById(`${$(this).html()}Audio`);
    audioElement.load();
    audioElement.play();
  });
  $('body').keydown((event) => {
    const musicalNotes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    if (musicalNotes.includes(event.key)) {
      const audioElement = document.getElementById(`${event.key}Audio`);
      audioElement.load();
      audioElement.play();
    }
  });
});
