const taskname =document.getElementById('input');
const listcontainer = document.getElementById('listcontainer');

function addTask(){
  if(taskname.value === "")
  {
    alert("Write some task before adding it in the tasks list!")
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = taskname.value;
    listcontainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '<i class="fa-solid fa-trash"></i>';
    li.appendChild(span);
    span.addEventListener('click',()=>{
      listcontainer.removeChild(li);
    })
    li.addEventListener('click',()=>{
      li.classList.toggle('checked');
    })
    taskname.value='';
  }
}

