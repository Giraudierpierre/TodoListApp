angular.module('starter.controllers')

    .controller('ToDoListCtrl', function ($scope, todoList) {

        $scope.listCanSwipe = true;
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
