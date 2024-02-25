let input = document.querySelector('#input');
let list = document.querySelector('#list');
let errorText = document.querySelector('#error-text');
let i = 1;

function filterText(text) {
    if (text) {
        if (text.length > 1) {
            return text;
        } else {
            errorText.innerHTML = 'Tek karakter girilemez.';
            return false;
        }
    }
    errorText.innerHTML = 'Boş görev girilemez.';
    return false;
}

function showList(input) {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let dateTime = date + ' | ' + time;
    list.innerHTML +=
        `<li class="list-item" id="list${i}">
            <div class="list-item-wrapper">
                <div class="list-text">
                    <span id="list-text${i}">${input}</span>
                    <p id="date-text">${dateTime}</p>
                </div>
                <div id="action-btn">
                    <i class="" onclick="deleteList(${i})">
                        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
						</i>
						<div id="action-btn2">
					<i class="" onclick="editList(${i})">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>

						</i>
                </div>
            </div>
        </li>`;
    i++;
}

function addList() {
    let inputText = input.value;
    if (filterText(inputText)) {
        showList(filterText(inputText));
        input.value = '';
        errorText.innerHTML = '';
    }
}

function deleteList(id) {
    let deleteList = document.getElementById(`list${id}`);
    list.removeChild(deleteList);
}
function editList(id) {
    let editList = document.getElementById(`list-text${id}`);
    let editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    editInput.setAttribute('value', editList.innerHTML);
    editInput.setAttribute('id', `edit-input${id}`);
    editList.innerHTML = '';
    editList.appendChild(editInput);
    editInput.focus();
    editInput.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
            editList.innerHTML = editInput.value;
            editInput.remove();
        }
    }
    );
}