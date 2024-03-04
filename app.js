const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password1 = document.querySelector('.password1');
const password2 = document.querySelector('.password2');
const submit = document.querySelector('.submit');


// Messages

const usernameMessage = document.querySelector('.user-msg')
const emailMessage = document.querySelector('.email-msg')
const password1Message = document.querySelector('.password1-msg')
const password2Message = document.querySelector('.password2-msg')


submit.addEventListener('click', e => {
  e.preventDefault();

  //if all the value are empty alert
  if (username.value === '' && email.value === '' && password1.value === '' && password2.value === ''){
    alert('Please fill all input field')
  }

  if(username.value === ''){
    showMessage(usernameMessage, 'Please Provide Your Name', 'red');
  }
  else{
    showMessage(usernameMessage, 'Great Name', 'green')
  }

});
function showMessage(element, msg, color){
element.style.visibility = 'visible'
element.textContent = msg;
element.style.color = color
element.previousElementSibling.style.border = `2px solid ${color}`;
}

