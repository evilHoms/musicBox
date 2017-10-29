;'use strict';

const notes = document.querySelectorAll(`.note`);

console.log(notes);

window.addEventListener(`keydown`, musicKeyDown);

notes.forEach(note => {
  note.addEventListener(`click`, (e) => {
    btnClick(note, e);
  });
});


function musicKeyDown(e) {
  switch(e.keyCode) {
    case 65:
      console.log(`a pressed`);
      btnClick(notes[0]);
      break;
    case 83:
      console.log(`s pressed`);
      btnClick(notes[1]);
      break;
    case 68:
      console.log(`d pressed`);
      btnClick(notes[2]);
      break;
    case 70:
      console.log(`f pressed`);
      btnClick(notes[3]);
      break;
    case 74:
      console.log(`j pressed`);
      btnClick(notes[4]);
      break;
    case 75:
      console.log(`k pressed`);
      btnClick(notes[5]);
      break;
    case 76:
      console.log(`l pressed`);
      btnClick(notes[6]);
      break;
  }
}

function btnClick(note, e) {
  console.log(note);
  const audio = document.querySelector(`audio.${note.id}`);
  audio.currentTime = 0;
  audio.play();
  
  note.classList.add(`pressed`);
  
  setTimeout(() => {
    note.classList.remove(`pressed`);
  }, 100);
}
