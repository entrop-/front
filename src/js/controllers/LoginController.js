


app.controller('LoginController', ['$scope','$http', '$attrs', function($scope,$http,$attrs) {

    $scope.wrongData = false;
    $scope.serviceDown = false;
    $scope.invalidAuth = false;
    $scope.statusOK = false;


    $scope.sendForm = function (user) {

        var url = $attrs.url;



        $http
            .post(url, { email: user.email, password: user.password })
            .success(function (response) {
                $scope.statusOK = true;
            })
            .error(function (response){
                $scope.invalid = true;
                if (response.status === 400) {
                    $scope.wrongData = true;
                }
                if (response.status === 401) {
                    $scope.invalidAuth = true;
                }
                if (response.status === 500) {
                    $scope.serviceDown = true;
                }

            });

    }
}]);
