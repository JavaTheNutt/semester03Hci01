/*This creates an angular app and sets ui.router as a dependency*/
var app = angular.module('myApp', [
    'ui.router'
]);
/*This config function applied to the app is part of the ui.router package and will handle routing,
 * this method of route configuration will allow experienced users to navigate directly to each
 * page without using the nav links*/
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
        .state('advanced', {
			url: '/html/advanced',
			templateUrl: 'partials/views/html_advanced.html'
		})
}]);

