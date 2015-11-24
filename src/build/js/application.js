/*This creates an angular app and sets ui.router as a dependency*/
var app = angular.module('myApp', [
    'ui.router',
    'ncy-angular-breadcrumb'
]);
/*This config function applied to the app is part of the ui.router package and will handle routing,
 * this method of route configuration will allow experienced users to navigate directly to each
 * page without using the nav links*/
app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/views/home.html',
			ncyBreadcrumb:{
				label : 'home'
			}
        })
        .state('javascript', {
            url: '/javascript',
            templateUrl: 'partials/views/javascript.html',
			ncyBreadcrumb:{
				label : 'javascript'
			}
        })
        .state('css', {
            url: '/css',
            templateUrl: 'partials/views/css.html',
			ncyBreadcrumb:{
				label : 'css'
			}
        })
        .state('html', {
            url: '/html',
            templateUrl: 'partials/views/html.html',
			ncyBreadcrumb:{
				label : 'html'
			}
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/views/about.html',
			ncyBreadcrumb:{
				label : 'about'
			}
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/views/contact.html',
			ncyBreadcrumb:{
				label : 'contact'
			}
        })
        .state('references', {
            url: '/references',
            templateUrl: 'partials/views/references.html',
			ncyBreadcrumb:{
				label : 'references'
			}
        })
        .state('html_setup', {
            url: '/html/setup',
            templateUrl: 'partials/views/html_setup.html',
			ncyBreadcrumb: {
				label: 'setup',
				parent: 'html'
			}
        })
        .state('basics',{
            url: '/html/basics',
            templateUrl: 'partials/views/basic_html.html',
			ncyBreadcrumb:{
				label:'basics',
				parent: 'html'
			}
        })
        .state('layout', {
            url: '/html/layout',
            templateUrl: 'partials/views/html_layout.html',
			ncyBreadcrumb:{
				label : 'layout',
				parent: 'html'
			}
        })
        .state('advanced', {
			url: '/html/advanced',
			templateUrl: 'partials/views/html_advanced.html',
			ncyBreadcrumb:{
				label : 'advanced',
				parent: 'html'
			}
		})
        .state('sitemap', {
            url: '/sitemap',
            templateUrl: 'partials/views/sitemap.html',
			ncyBreadcrumb:{
				label : 'sitemap'
			}
        })
		.state('cssInclude', {
			url: '/css/include',
			templateUrl: 'partials/views/css_include',
			ncyBreadcrumb:{
				label : 'include',
				parent: 'css'
			}
		});
}]);



app.controller('AdvancedHtmlCtrl', ['$scope', function ($scope) {
	$scope.toggleTable = function () {
		$('.htmlAdvancedTable').toggle();
	};
}]);


app.controller('ContactCtrl', ['$scope', function ($scope) {
	/*This function will be called every time that the value in the email field is changed.
	* It will ensure that if the email is invalid, the submit button will remain disabled.*/
	$scope.checkEmail = function () {
		if($scope.contactForm.emailInput.$valid){
			$('#submit').removeClass('disabled');
			$('#emailInput').removeClass('contactFormInvalid');
		} else {
			$('#submit').addClass('disabled');
			$('#emailInput').addClass('contactFormInvalid');
		}
	};
	/*This function will ensure that if the button is clicked, the message telling the
	* user that the server is not operational. This function has a hook to ensure that the message will
	* not be displayed if the button is disabled*/
	$scope.sendMessage = function () {
		if($('#submit').hasClass('disabled')){
			return;
		}
		$('p.confirmMessage').show();
	};
}]);



$(document).ready(function () {
    $('#accordion').accordion();
});