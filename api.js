function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){

        if(this.readyState==4 && this.status==200){
            var response =JSON.parse(this.responseText);
            console.log(response);
            var output="";
            for(var i=0;i<response.length;i++){
                output +="<li>"+ response[i].title+"</li>";
            }
        document.getElementById('demo').innerHTML=output;
        }
}
    xhttp.open('GET',"https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

    function fetchTodoList() {
        return new Promise((resolve, reject) => {
          fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
      }
  
      function processTodoList(todoList) {
        let completedTaskCount = 0;
  
        // Update the UI to display todo list items with checkboxes
        const todoListElement = document.getElementById('todo-list');

        todoList.forEach(todo => {
          const listItem = document.createElement('li');
  
          const checkbox = document.createElement('input');

          checkbox.type = 'checkbox';
          checkbox.checked = todo.completed;
          //checkbox.checked = false;
          checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
              completedTaskCount++;
            } else {
              completedTaskCount--;
            }
  
            if (completedTaskCount === 95) {
              showAlert(completedTaskCount);
            }
          });
          listItem.appendChild(checkbox);
  
          const label = document.createElement('label');

          label.textContent = todo.title;
          listItem.appendChild(label);
  
          if (todo.completed) {
            listItem.style.textDecoration = 'line-through' ;
            completedTaskCount++;
          }
  
          todoListElement.appendChild(listItem);
        });
  
        // Check if there are already 95 completed tasks
        if (completedTaskCount === 95) {
          showAlert(completedTaskCount);
        }
      }
  
      function showAlert(completedTaskCount) {
        window.alert(`Congrats 5 Tasks have been Successfully Completed`);
      }
  

      
      // Fetch the todo list data from the API and process it
      fetchTodoList()
        .then(data => processTodoList(data))
        .catch(error => console.error(error));


        


        
