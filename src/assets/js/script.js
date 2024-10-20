import l from "./domGenerator.js"

// this section is for selecting input values
const taskTitleInput = document.querySelector('#title');
const myUl = document.querySelector('.mainUl');
const note = document.querySelector('#addNote');
const saveBtn = document.querySelector('.btns');
const cancelBtn = document.querySelector('.btnss');
const clearBtn = document.querySelector('#clearBtn');

// Activate Listeners
window.addEventListener('load',addToNoteList);
saveBtn.addEventListener('click', saveNote)
cancelBtn.addEventListener('click',cancel)
clearBtn.addEventListener('click',clear)

// first function to save the note and generate the note elements
function saveNote(e) {
    // Preventing the automatic execution process
    e.preventDefault()

    // Gather User inputs
    const titleNote = taskTitleInput.value;
    const mainNote = note.value;

    // Validation User inputs
    if (titleNote === '') {
        silverBox({
            alertIcon: "error",
            text: "Please insert a title.",
            centerContent: true,
            cancelButton: {
                   text: "OK"
            }
        })
        return

    }

    // Inject new task to HTML content
    myUl.appendChild(template_task(titleNote, mainNote));

    // Clear user input fields
    taskTitleInput.value = '';
    note.value = '';

    // Store User data in local-storage
    addToLS({title:titleNote,note:mainNote});

}

// second function for getting notes from local storage
function getLocal(){
    let reviewNote;

    // Get data from local-storage
    let lsNote = localStorage.getItem('note');

    // If there is no data
    if(lsNote === null){
        // Add new list
        reviewNote = [];

    }else{
        // Gather data
        reviewNote = JSON.parse(lsNote);

    }

    // Return data
    return reviewNote;
}

// third function for adding notes to local storage
function addToLS(userNote){
    // Get all data from local-storage
    let oldNote = getLocal();

    // Add new note to list of notes
    oldNote.push(userNote);

    // Send data to local-storage
    localStorage.setItem('note', JSON.stringify(oldNote));

    silverBox({
        title: {
               text: "Success",
               alertIcon: "success"
        },
        text: "Your task has been added."
    })

}

// fourth function for cancel btn
function cancel(e){
    // Preventing the automatic execution process
    e.preventDefault();

    // Show Message to User
    silverBox({
        position: "top-right",
        alertIcon: "info",
        text: "Saving task was canceled",
        centerContent: true,
        showCloseButton: true
    })

    // Clear user input fields
    taskTitleInput.value = '';
    note.value = '';

}

// fifth function for clear notes
function clear(e){
    // Show User message
    silverBox({
        timer: 2000,
        customIcon: "./assets/imgs/lightTimeout.png",
        title: {
               text: "Clearing your tasks"
        },
        centerContent: true
    })

    // Preventing the automatic execution process
    e.preventDefault();

    // 1) Clear All task from html
    myUl.innerHTML = '';

    // 2) Clear All task from local-storage
    localStorage.clear();

}

// sixth function for getting notes from local storage and adding them to the page
function addToNoteList(){
    getLocal().forEach(function(note){
        myUl.appendChild(template_task(note.title, note.note));

    })
}

/**
 * This function generate dom content of each task
 * @param {string} titleNote - Title of each note
 * @param {string} mainNote - Context of each note
 * @returns DOM
 */
function template_task(titleNote, mainNote){
    return l({
        tag: "div",
        attributes: { id: "todoClass" },
        children: [
            {
                tag: "li",
                attributes: { class: "todo" },
                children: [
                    {
                        tag: "h3",
                        properties: { textContent: titleNote }
                    },
                    {
                        tag: "span",
                        properties: { textContent: mainNote }
                    }
                ]
            },
            {
                tag: "img",
                attributes: { src: "./assets/imgs/ion_checkmark-circle-outline.png", id: "checkbtn" },
            },
            {
                tag: "img",
                attributes: { src: "./assets/imgs/ion_close-circle-outline.png", id: "closebtn" },
            }
        ],
    });
}