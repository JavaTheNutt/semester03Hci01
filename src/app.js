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
            template: '<p>JavaScript</p>'
        })
        .state('css', {
            url: '/css',
            template: '<p>CSS</p>'
        })
        .state('html', {
            url: '/html',
            template: '<p>HTML</p>'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/views/about.html>'
        });
}]);

