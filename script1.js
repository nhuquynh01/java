const books = document.querySelectorAll('.js-book')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
const booking = document.querySelector('.booking-now')
const modalBook = document.querySelector('.js-modal-book')
const modalBookClose = document.querySelector('.js-modal-book-close')


function showbooking(){
    modal.classList.add('open')
}
function hidebooking(){
    modal.classList.remove('open')
}

function showSuccess(){
    modal.classList.remove('open')
    modalBook.classList.add('open1')
}
function hideSuccess(){
    modalBook.classList.remove('open1')
}

for(const book of books) {
    book.addEventListener('click', showbooking)
}

modalClose.addEventListener('click', hidebooking)
modalBookClose.addEventListener('click', hideSuccess)

modal.addEventListener('click', hidebooking)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})
booking.addEventListener('click', showSuccess)


