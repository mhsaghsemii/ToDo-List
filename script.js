// Variables 
const dateForm = document.querySelector('.form')
const titleInput = document.querySelector('#title')
const dateFormDate = document.querySelector('#date')
const dateFormTime = document.querySelector('#date2')
const dateFormDate2 = document.querySelector('#date')
const dateFormTime2 = document.querySelector('#date2')
const todoTask = document.querySelector('.rodo-task')

const saveBtn = document.querySelector('class="btns color-tertiary text-white')

saveBtn.addEventListener('click', getValueTitle)


// functions 
function getValueTitle() {
  e.preventDefault()

    const titleInputvalue = titleInput.value.trim();
    const dateFormDateValue = dateFormDate.value.trim();
    const dateFormTimeValue = dateFormTime.value.trim();
    const dateFormDate2Value = dateFormDate2.value.trim();
    const dateFormTime2Value = dateFormTime2.value.trim();

    const li = document.createElement('li');

    li.appendChild(document.createTextNode(titleInputvalue))
    li.appendChild(document.createTextNode(dateFormDateValue))
    li.appendChild(document.createTextNode(dateFormDate2Value))
    li.appendChild(document.createTextNode(dateFormTimeValue))
    li.appendChild(document.createTextNode(dateFormTime2Value))

    if (!titleInputvalue,  !dateFormDateValue,  !dateFormTimeValue,  !dateFormDate2Value,  !dateFormTime2Value){
        alert('Please fill out all the fields!');
        return; // Exit function if validation fails
      }
    
    
    const todoUl = document.querySelector('#ul')
    todoUl.appendChild(li);




  // Clear form fields after successful submission
  form.reset();
  dateFormDate.reset();
  dateFormDate2.reset();
  dateFormTime.reset();
  dateFormTime2.reset();


};

//   function saveToLocalStorage(li) {
//     // Get existing data or create an empty array
//     const existingData = JSON.parse(localStorage.getItem('li')) || [];
  
//     // Push new data to existing data
//     existingData.push(li);
  
//     // Store updated data in local storage
//     localStorage.setItem('li', JSON.stringify(existingData));
//   }


  
function getLS() {
    let recevieNotes;
  
    let LSNotes = localStorage.getItem('li');
  
    if (LSNotes == null) {
      recevieNotes = []
    } else {
      recevieNotes = JSON.parse(LSNotes)
    }
  
    return recevieNotes
  }
  
  
  function addToLS(userNote) {
    let oldNotes = getLS()
  
    oldNotes.push(userNote)
  
    localStorage.setItem('noteList', JSON.stringify(oldNotes))
  }
  
  

  if (localStorage.getItem('database')) {
    let lsData = JSON.parse(localStorage.getItem('database'))
  
    lsData.push({
      value:'Data Value 1231 ',
      id : 1
    })
  
    localStorage.setItem('database', JSON.stringify(lsData))
  
  } else {
    localStorage.setItem('database', '[]')
  }
  
