angular.module('starter.controllers')

    .controller('ToDoListCtrl', function ($scope, todoList) {

        //Get all tasks
        $scope.getTasks = function() {

            var promise = todoList.getTasks();

            promise.then(function(data) {
                //Success
                $scope.tasks = data;
            }, function() {
                //Error
                $scope.tasks = 'Erreur';
            });
        };
    });
