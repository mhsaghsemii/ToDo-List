// this section is for selecting input values
const taskTitleinput = document.querySelector('#title');
const myUl = document.querySelector('.mainUl');
const note = document.querySelector('#addNote');
const saveBtn = document.querySelector('.btns');


// first function to save the note and generate the note elements
saveBtn.addEventListener('click', saveNote)
function saveNote(e) {
    e.preventDefault()
    const titleNote = taskTitleinput.value;
    const mainNote = note.value;
    if (titleNote === '') {
        alert('Please add a title')
    }else{
        const newTitle = document.createElement('h3');
    newTitle.id ='tasktitle';
    newTitle.textContent = titleNote;
    const newNote = document.createElement('span');
    newNote.textContent = mainNote;
    const newLi = document.createElement('li');
    newLi.classList.add('todo');
    const newDiv = document.createElement('div');
    newDiv.id ='todoClass';
    const checkImg = document.createElement('img');
    checkImg.src = 'assets/imgs/ion_checkmark-circle-outline.png';
    checkImg.id = 'checkbtn';
    const removeImg = document.createElement('img');
    removeImg.src = 'assets/imgs/ion_close-circle-outline.png';
    removeImg.id = 'closebtn';
    newLi.appendChild(newTitle);
    newLi.appendChild(newNote);
    newDiv.appendChild(newLi);
    newDiv.appendChild(checkImg);
    newDiv.appendChild(removeImg);
    myUl.appendChild(newDiv);
    taskTitleinput.value = '';
    note.value = '';
    addtols({title:titleNote,note:mainNote});


    }
    
   
    

    
}

// second function for getting notes from local storage
function getLocal(){
    let revieveNote;
    let lsNote = localStorage.getItem('note');
    if(lsNote === null){
        revieveNote = [];
    }else{
        revieveNote = JSON.parse(lsNote);
    }
    return revieveNote;
}

// third function for adding notes to local storage
function addtols(usernote){
    let oldnote = getLocal();
    oldnote.push(usernote);
    localStorage.setItem('note',JSON.stringify(oldnote));
}