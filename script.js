/* ======== Contact Form Validation ======== */
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if(name === '' || email === ''){
    formMsg.textContent = 'Name and Email are required.';
    formMsg.style.color = 'red';
    return;
  }

  // simple email regex validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!emailPattern.test(email)){
    formMsg.textContent = 'Please enter a valid email.';
    formMsg.style.color = 'red';
    return;
  }

  formMsg.textContent = 'Form submitted successfully!';
  formMsg.style.color = 'green';
  contactForm.reset();
});

/* ======== Dynamic To-Do List ======== */
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask(){
  const taskText = taskInput.value.trim();
  if(taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.style.background = '#dc3545';
  delBtn.style.color = 'white';
  delBtn.style.border = 'none';
  delBtn.style.borderRadius = '5px';
  delBtn.style.cursor = 'pointer';
  delBtn.style.marginLeft = '10px';

  delBtn.addEventListener('click', ()=>{
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = '';
}
