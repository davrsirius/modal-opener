const elDemoModalOpener = document.querySelector('.modal-opener');
const elDemoModal = document.querySelector('.modal');
elDemoModalOpener.addEventListener('click', function(){
    elDemoModal.classList.add('modal-open');
});

const elCloseButton = document.querySelector('.close-button');
elCloseButton.addEventListener('click', function(){
    elDemoModal.classList.remove('modal-open');
});