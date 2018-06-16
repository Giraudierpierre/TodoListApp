angular.module('starter.controllers')
    .service('todoList', function($http, $q) {
        var scope = this;

        scope.getTasks = function() {
            var deferred = $q.defer();

            //Request get all tasks
            $http.get(url + '/tasks')
                .success(function(data) {

                    //If valid datas
                    if (data) deferred.resolve(data);

                    //If no valid datas
                    else deferred.reject(data);
                });
            //Send promise to controller
            return deferred.promise;
        };
        
        scope.getCompletedTasks = function() {
            var deferred = $q.defer();

            //Request get all tasks
            $http.get(url + '/tasks/completed')
                .success(function(data) {

                    //If valid datas
                    if (data) deferred.resolve(data);

                    //If no valid datas
                    else deferred.reject(data);
                });
            //Send promise to controller
            return deferred.promise;
        };
        
        scope.postTask = function() {
            var deferred = $q.defer();

            var data = null;

            //Request get all tasks
            $http.post(url + '/task', data, {headers: {'Content-Type': 'application/json'}})
                .success(function(data) {

                    //If valid datas
                    if (data) deferred.resolve(data);

                    //If no valid datas
                    else deferred.reject(data);
                });
            //Send promise to controller
            return deferred.promise;
        };

        scope.putTask = function(task) {
            var deferred = $q.defer();

            var data = {
                'content': task.content,
                'tag': task.tag,
                'completed': task.destination
            };

            var taskId = task.taskId;

            $http.put(url + '/task/' + taskId, data, {headers: {'Content-Type': 'application/json'}})
                .success(function (data) {
                    if (data) deferred.resolve(data);

                    else deferred.reject(data);
                });
            return deferred.promise;
        };

        scope.deleteTask = function(task) {
            var deferred = $q.defer();

            var taskId = task.taskId;

            $http.delete(url + '/task/' + taskId, {headers: {'Content-Type': 'application/json'}})
                .success(function (data) {
                    if (data) deferred.resolve(data);

                    else deferred.reject(data);
                });
            return deferred.promise;
        };
    });