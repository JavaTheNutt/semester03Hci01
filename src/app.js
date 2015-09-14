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
        .state('about', {
            url: '/about',
            template: '<p>About</p>'
        })
        .state('profile', {
            url: '/profile',
            template: '<p>Profile</p>'
        })
        .state('contact', {
            url: '/contact',
            template: '<p>Contact</p>'
        });
}]);

