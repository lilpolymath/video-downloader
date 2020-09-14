const paste = document.getElementById('paste');
const download = document.getElementById('download');
const cancel = document.getElementById('cancel');
const modal = document.querySelector('.modal');

const pasteClick = () => {
  modal.classList.add('show');
};

const closeModal = () => {
  modal.classList.remove('show');
};

cancel.addEventListener('click', closeModal);
paste.addEventListener('click', pasteClick);
