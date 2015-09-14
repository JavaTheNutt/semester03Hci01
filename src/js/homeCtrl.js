app.controller('HomeCtrl', ['$scope', function ($scope) {
    $('.showAnswer').click(function () {
        console.log('test');
        $('#testAnswer').removeClass('hiddenTestAnswer');
    });
    $scope.name = 'Joe';
}]);