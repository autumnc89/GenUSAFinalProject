class taskManager{
	constructor(name,assignee,project,description){
    	this.name=name;
      	this.assignee=assignee;
        this.project=project;
        this.description=description;
    }
  	manageTask(){
    	return this.name + " assigned to: " + this.assignee + " this project, " +  this.project + " to do this: " + this.description + ".";
    }
}

let mate = new taskManager("Mike Will", "Betty", "Task 1", "add Javascript");
mate.manageTask();  // result: 
console.log(mate.manageTask())



