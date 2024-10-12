const taskTitleinput = document.querySelector('#title')
const saveBtn = document.querySelector('btns color-tertiary text-white')

saveBtn.addEventListener('click', saveNote)

function saveNote() {

    const h3Title = document.querySelector('h3')
    h3Title.textContent = taskTitleinput.value
    
}