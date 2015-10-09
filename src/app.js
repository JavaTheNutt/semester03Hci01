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
        .state('html_setup', {
            url: '/html/setup',
            templateUrl: 'partials/views/html_setup.html'
        })
        .state('basics',{
            url: '/html/basics',
            templateUrl: 'partials/views/basic_html.html'
        })
        .state('layout', {
            url: '/html/layout',
            templateUrl: 'partials/views/html_layout.html'
        })
}]);

