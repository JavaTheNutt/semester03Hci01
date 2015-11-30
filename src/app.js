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
			templateUrl: 'partials/views/reference/home.html',
			ncyBreadcrumb: {
				label: 'home'
			}
		})
		.state('css', {
			url: '/css',
			templateUrl: 'partials/views/css/css.html',
			ncyBreadcrumb: {
				label: 'css',
				parent: 'home'
			}
		})
		.state('html', {
			url: '/html',
			templateUrl: 'partials/views/html/html.html',
			ncyBreadcrumb: {
				label: 'html',
				parent: 'home'
			}
		})
		.state('about', {
			url: '/about',
			templateUrl: 'partials/views/reference/about.html',
			ncyBreadcrumb: {
				label: 'about',
				parent: 'home'
			}
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'partials/views/reference/contact.html',
			ncyBreadcrumb: {
				label: 'contact',
				parent: 'about'
			}
		})
		.state('references', {
			url: '/references',
			templateUrl: 'partials/views/reference/references.html',
			ncyBreadcrumb: {
				label: 'references',
				parent: 'about'
			}
		})
		.state('html_setup', {
			url: '/html/setup',
			templateUrl: 'partials/views/html/html_setup.html',
			ncyBreadcrumb: {
				label: 'setup',
				parent: 'html'
			}
		})
		.state('basics', {
			url: '/html/basics',
			templateUrl: 'partials/views/html/basic_html.html',
			controller: 'BasicHtmlCtrl',
			ncyBreadcrumb: {
				label: 'basics',
				parent: 'html'
			}
		})
		.state('layout', {
			url: '/html/layout',
			templateUrl: 'partials/views/html/html_layout.html',
			ncyBreadcrumb: {
				label: 'layout',
				parent: 'html'
			}
		})
		.state('hyper', {
			url: '/html/hyperlinks',
			templateUrl: 'partials/views/html/html_hyper.html',
			controller: 'HyperlinkHtmlCtrl',
			ncyBreadcrumb: {
				label: 'hyperlinks',
				parent: 'html'
			}
		})
		.state('advanced', {
			url: '/html/advanced',
			templateUrl: 'partials/views/html/html_advanced.html',
			ncyBreadcrumb: {
				label: 'advanced',
				parent: 'html'
			}
		})
		.state('cssInclude', {
			url: '/css/include',
			templateUrl: 'partials/views/css/css_include.html',
			ncyBreadcrumb: {
				label: 'include',
				parent: 'css'
			}
		})
		.state('cssSyntax', {
			url: '/css/syntax',
			templateUrl: 'partials/views/css/css_syntax.html',
			ncyBreadcrumb: {
				label: 'syntax',
				parent: 'css'
			}
		})
		.state('cssSelectors', {
			url: '/css/selectors',
			templateUrl: 'partials/views/css/css_selectors.html',
			ncyBreadcrumb: {
				label: 'selectors',
				parent: 'css'
			}
		})
		.state('cssPseudo', {
			url: '/css/psuedo',
			templateUrl: 'partials/views/css/css_pseudo.html',
			controller: 'PseudoCtrl',
			ncyBreadcrumb: {
				label: 'pseudo classes',
				parent: 'css'
			}
		})

}]);

