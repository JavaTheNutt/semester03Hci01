app.controller('ContactCtrl', ['$scope', function ($scope) {
    $scope.messageSent = false;
    $scope.sendMessage = function(){
        $scope.messageSent = true;
    }

}]);