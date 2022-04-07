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
mate.manageTask();  // result: Mike Will is 15 years old!
console.log(mate.manageTask())


// class ClassMates{
// 	constructor(name,age){
//     	this.name=name;
//       	this.age=age;
//     }
//   	displayInfo(){
//     	return this.name + "is " + this.age + " years old!";
//     }
// }

// let classmate = new ClassMates("Mike Will",15);
// classmate.displayInfo();  // result: Mike Will is 15 years old!
