const taskTitleinput = document.querySelector('#title');
const saveBtn = document.querySelector('.btns');
saveBtn.addEventListener('click', saveNote)
function saveNote(e) {
    e.preventDefault()
    const h3Title = document.querySelector('#tasktitle')
    h3Title.textContent = taskTitleinput.value

    
}