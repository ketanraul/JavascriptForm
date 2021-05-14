console.log("this is Javascript");
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
// display constructor

function Display() { }


// add methoed to display prototype
Display.prototype.add = function (book) {
    console.log("adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                    </tr>`;
                    tableBody.innerHTML += uiString;
}
//implement the clear fucntion
Display.prototype.clear = function () {
    let LibraryForm = document.getElementById('LibraryForm');
    LibraryForm.reset();

}
//implement the validate fucntion
Display.prototype.validate = function (book) {
    if(book.name.length<2|| book.author.length<2){
        return false;
    }
    else{
        return true;
    }

}
//implement the Show fucntion
Display.prototype.show = function (type,displayMessage) {
let message = document.getElementById('message');
message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message:</strong> ${displayMessage}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                     </div>`;

                     setTimeout(() => {
                         message.innerHTML=''
                     }, 2000);
}
// add submit eventlistener to form

let LibraryForm = document.getElementById('LibraryForm');
LibraryForm.addEventListener('submit', LibraryFormSubmit);

function LibraryFormSubmit(e) {
    console.log("The library form submitted");
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');


    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
   
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','successfully added');
    }
    else{
        //show error to the user;
        display.show('danger','sorry you can not add this book');
    }

    
    e.preventDefault();
}