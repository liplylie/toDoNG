angular.module('todo')
.component('todos', {
	controller: function(){
		this.todos = [];
		this.addTodo = function(todo){
			this.todos.push(todo)
		}
	},
	templateUrl: './templates/todos.html'
})