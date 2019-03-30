const myForm = document.querySelector('#contact');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message')
const msg = document.querySelector('.fields');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault(); // protect from page refresh

    // console.log(nameInput.value + ' ' + emialInput.value);
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please enter all fields');
        // msg.classList.add('error');
        // msg.innerHTML = 'Please enter all fields!';
    } else {
        const li = document.createElement('li');
        const text = document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${messageInput.value}`);
        console.log(`${nameInput.value}`);
        
        li.appendChild(text);
        li.innerHTML += ` &nbsp;&nbsp;&nbsp;<button onclick="remove(this)"> X</button>`;
        
        
        //console.log(li);
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}

function remove(link) { 
    link.parentNode.parentNode.removeChild(link.parentNode);
}
