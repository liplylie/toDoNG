angular.module('todo')
.component('todos', {
	controller: function($scope){
		$scope.todos = [];
		$scope.addTodo = function(todo){
			$scope.todo = null
			$scope.todos.push(todo)
		},
		$scope.deleteTodo = function(todo){
			$scope.todos.splice($scope.todos.indexOf(todo), 1)
		}
	},
	templateUrl: './templates/todos.html'
})