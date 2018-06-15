angular.module('starter.controllers')

    .controller('ToDoListCtrl', function($scope, todoList, $http) {

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

        $scope.createTask = function() {
            $http.get("templates/task_widget.html").then(function(widget) {
                var task = document.createElement("ion-item");
                task.setAttribute('class', 'item item-complex item-right-editable');
                task.innerHTML = (widget.data).trim();
                var taskList = document.getElementById('taskList').children;
                taskList[0].appendChild(task);

                postTask();
            });
        };

        function postTask() {

            var promise = todoList.postTask();

            promise.then(function(data) {
                //Success
            }, function() {
                //Error
            });
        }

        $scope.getTaskContent = function(taskContent) {

            var data = {
                'content': taskContent,
            }
        }

        $scope.getTags = function() {

            var promise = todoList.getTags();

            promise.then(function(data) {
                //Success
                $scope.tags = data;
            }, function() {
                //Error
            });
        };
    });
