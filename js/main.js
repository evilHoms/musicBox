;'use strict';

const notes = document.querySelectorAll(`.note`);


notes.forEach(note => {
  note.addEventListener(`click`, (e) => {
    btnClick(note, e);
  });
});

function btnClick(note, e) {
  const audio = document.querySelector(`audio.${note.id}`);
  audio.currentTime = 0;
  audio.play();
  
  note.classList.add(`pressed`);
  
  setTimeout(() => {
    note.classList.remove(`pressed`);
  }, 100);
}
