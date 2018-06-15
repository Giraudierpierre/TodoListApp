angular.module('starter.controllers')
    .service('todoList', function($http, $q) {
        var scope = this;

        scope.getTasks = function() {
            var deferred = $q.defer();
            var header = 'Access-Control-Allow-Origin: *';

            //Request get all tasks
            $http.get(url + '/tasks', header)
                .success(function(data) {

                    //If valid datas
                    if (data) deferred.resolve(data);

                    //If no valid datas
                    else deferred.reject(data);
                });
            //Send promise to controller
            return deferred.promise;
        };
    });