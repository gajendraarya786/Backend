let todo = [];
let req;

while(true) {
  req  = prompt("Please enter your request"); 

     if(req == "quit"){
        console.log("Quitting app");
        break;
     }
     if(req == "list"){
        console.log("----------------")
         for(let i=0; i< todo.length; i++){
            console.log(i, todo[i]);
         }
         console.log("----------------")
     }
     else if(req == "add"){
        let tasks = prompt("Please enter tasks to add");
        todo.push(tasks);
        console.log("task added");
     }
      else if(req == "delete"){
          let idx = prompt("enter index you want to delete");
          todo.splice(idx, 1);
          console.log("Task deleted");
      }

      // let req = prompt("Please enter your request");
     
}