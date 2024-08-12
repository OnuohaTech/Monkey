const closed = document.querySelector('.closed')
const open = document.querySelector('.open')

closed.addEventListener('click',() => {
    if(closed.classList.contains('closed')){
        open.classList.add('active')
        closed.classList.remove('active')
    }
})

open.addEventListener('click',() => {
    if(open.classList.contains('open')){
        closed.classList.add('active')
        open.classList.remove('active')
    }
})
