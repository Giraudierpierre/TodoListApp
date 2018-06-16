angular.module('starter.controllers')

    .controller('ToDoListCtrl', function($scope, todoList) {

        $scope.listCanSwipe = true;
        //Get all tasks
        $scope.getTasks = function() {

            var promise = todoList.getTasks();

            promise.then(function(data) {
                //Success
                $scope.tasks = data;
            }, function() {
                //Error
            });
        };

        $scope.getCompletedTasks = function() {

            var promise = todoList.getCompletedTasks();

            promise.then(function(data) {
                //Success
                $scope.completedTasks = data;
                $scope.completedTasksNumber = data.length;
            }, function() {
                //Error
            });
        };

        $scope.postTask = function() {

            var promise = todoList.postTask();

            promise.then(function() {
                $scope.getTasks();

            }, function() {
                //Error
            });
        };

        $scope.getTaskContent = function(taskId, taskContent) {

            $scope.putTask(taskId, taskContent, null);
        };

        $scope.getTaskTag = function(taskId, taskTag) {

            $scope.putTask(taskId, null, taskTag);
        };

        $scope.putTask = function(taskId, taskContent, taskTag) {

            var data = {
                'taskId': taskId,
                'content': taskContent,
                'tag': taskTag
            };

            var promise = todoList.putTask(data);

            promise.then(function() {

            }, function() {
                //Error
            });
        };

        $scope.moveTask = function(taskId, destination) {
            var data = {
                'taskId': taskId,
                'destination': destination
            };

            var promise = todoList.putTask(data);

            promise.then(function() {

                $scope.getCompletedTasks();
                $scope.getTasks();

            }, function() {
                //Error
            });
        };

    });
