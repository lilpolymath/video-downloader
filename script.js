const paste = document.getElementById('paste');
const download = document.getElementById('download');
const cancel = document.getElementById('cancel');
const modal = document.querySelector('.modal');
const main = document.querySelectorAll('.button');

const pasteClick = () => {
  console.log('p');
  paste.textContent = 'Fetching Video';
  main[0].classList.add('animate_button');
  paste.addEventListener(
    'transitionend',
    e => {
      if (e.pseudoElement == '::after') {
        modal.classList.add('show');
        console.log('show');
      }
    },
    true
  );
};

const downloadClick = () => {
  console.log('d');
  download.textContent = 'Downloading';
  main[1].classList.add('animate_button');
  download.addEventListener('transitionend', e => {
    if (e.pseudoElement == '::after') {
      download.textContent = 'Downloaded';
      cancel.textContent = 'Go Home';
    }
  }, true);
};

const closeModal = () => {
  console.log('c');
  paste.textContent = 'Paste Link';
  main.forEach(elem => elem.classList.remove('animate_button'));
  modal.classList.remove('show');
};

cancel.addEventListener('click', closeModal, true);
paste.addEventListener('click', pasteClick, true);
download.addEventListener('click', downloadClick, true);
