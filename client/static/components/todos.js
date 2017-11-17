angular.module('todo')
.component('todos', {
	controller: function(){
		this.todos = [];
		this.addTodo = function(todo){
			this.todos.push(todo)
		},
		this.deleteTodo = function(todo){
			this.todos.splice(this.todos.indexOf(todo), 1)
		}
	},
	templateUrl: './templates/todos.html'
})