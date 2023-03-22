const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

const todoUL = JSON.parse(localStorage.getItem("todos"));

let ls = localStorage.getItem("todos")
let todo = ls ? JSON.parse(ls) : [];


form.addEventListener('submit', (e)=>{ 
e.preventDefault(); 
 
  const todoText = input.value + "";
  
  if(todoText){ 
       var todoEl = document.createElement('li');
      todoEl.classList.add("fit");
    
       todoEl.innerText = todoText;

       localStorage.setItem("data", todoText);

        
    todoEl.addEventListener('click', ()=>{ 
      todoEl.classList.toggle('completed');
    });
  }  

    todos.appendChild(todoEl);   
    input.value = '';
  
   var btnEl = document.createElement('button');  
     btnEl.classList.add('btn');
     btnEl.innerHTML = `<i class="fa-solid fa-trash"></i>`;
     todoEl.appendChild(btnEl);
  
     console.log(todoEl);

    btnEl.addEventListener('click', (e)=>{
      e.preventDefault();
      todoEl.remove();
    }); 


});
