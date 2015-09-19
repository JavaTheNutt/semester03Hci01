var app = angular.module('myApp', [
    'ui.router'
]);
app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/views/home.html'
        })
        .state('javascript', {
            url: '/javascript',
            templateUrl: 'partials/views/javascript.html'
        })
        .state('css', {
            url: '/css',
            templateUrl: 'partials/views/css.html'
        })
        .state('html', {
            url: '/html',
            templateUrl: 'partials/views/html.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/views/about.html'
        })
        .state('disclaimer', {
            url: '/disclaimer',
            templateUrl: 'partials/views/disclaimer.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/views/contact.html'
        })
        .state('references', {
            url: '/references',
            templateUrl: 'partials/views/references.html'
        })
}]);



app.controller('ContactCtrl', ['$scope', function ($scope) {
    $scope.messageSent = false;
    $scope.sendMessage = function(){
        $scope.messageSent = true;
    }

}]);

