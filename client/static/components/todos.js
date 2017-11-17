angular.module('todo')
.component('todos', {
	controller: function(){
		this.todos = ['clean room', 'vacuum'];

	},
	templateUrl: './templates/todos.html'
})