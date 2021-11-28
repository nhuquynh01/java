const books = document.querySelectorAll('.js-book')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
const booking = document.querySelector('.booking-now')



function showbooking(){
    modal.classList.add('open')
}
function hidebooking(){
    modal.classList.remove('open')
}



for(const book of books) {
    book.addEventListener('click', showbooking)
}

modalClose.addEventListener('click', hidebooking)


modal.addEventListener('click', hidebooking)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})





