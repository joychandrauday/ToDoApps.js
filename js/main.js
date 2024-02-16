const taskInput=document.getElementById('taskInput');
const listContainer=document.getElementById('listUl');

function addTask() {
    if (taskInput.value==='') {
        alert('write something')
    }else{

        document.getElementById('dummyP').style.display='none';

        let li=document.createElement('li');
        li.innerText=taskInput.value;
        listContainer.appendChild(li);

        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);


        taskInput.value='';
    }
}

listContainer.addEventListener('click',function(e){
    if (e.target.tagName === 'Li') {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
},false)