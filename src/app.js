/*This creates an angular app and sets ui.router as a dependency*/
var app = angular.module('myApp', [
	'ui.router',
	'ncy-angular-breadcrumb'
]);
/*This sets up the basic configuration for the website. It will tell each view which template should be shown and which controller should be
 * used. It will also provide the labels and the inheritance for the breadcrumbs*/
app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
	/*This ensures that if an unrecognised URL is typed in, it will revert to the homepage*/
	$urlRouterProvider.otherwise('/');
	$stateProvider
	/*Homepage*/
		.state('home', {
			/*URL for the homepage*/
			url: '/',
			/*Template for the homepage*/
			templateUrl: 'partials/views/reference/home.html',
			/*Breadcrumb setup*/
			ncyBreadcrumb: {
				/*Breadcrumb label*/
				label: 'home'
			}
		})
		/*First CSS page*/
		.state('css', {
			url: '/css',
			templateUrl: 'partials/views/css/css.html',
			ncyBreadcrumb: {
				label: 'css',
				/*Set up inheritance for this view(i.e. all pages are decedents of home)*/
				parent: 'home'
			}
		})
		/*First HTML page*/
		.state('html', {
			url: '/html',
			templateUrl: 'partials/views/html/html.html',
			ncyBreadcrumb: {
				label: 'html',
				parent: 'home'
			}
		})
		/*About page*/
		.state('about', {
			url: '/about',
			templateUrl: 'partials/views/reference/about.html',
			ncyBreadcrumb: {
				label: 'about',
				parent: 'home'
			}
		})
		/*Contact page*/
		.state('contact', {
			url: '/contact',
			templateUrl: 'partials/views/reference/contact.html',
			controller: 'ContactCtrl',
			ncyBreadcrumb: {
				label: 'contact',
				parent: 'about'
			}
		})
		/*References page*/
		.state('references', {
			url: '/references',
			templateUrl: 'partials/views/reference/references.html',
			ncyBreadcrumb: {
				label: 'references',
				parent: 'about'
			}
		})
		/*HTML setup page*/
		.state('html_setup', {
			url: '/html/setup',
			templateUrl: 'partials/views/html/html_setup.html',
			ncyBreadcrumb: {
				label: 'setup',
				parent: 'html'
			}
		})
		/*HTML basics page*/
		.state('basics', {
			url: '/html/basics',
			templateUrl: 'partials/views/html/basic_html.html',
			controller: 'BasicHtmlCtrl',
			ncyBreadcrumb: {
				label: 'basics',
				parent: 'html'
			}
		})
		/*HTML layout page*/
		.state('layout', {
			url: '/html/layout',
			templateUrl: 'partials/views/html/html_layout.html',
			ncyBreadcrumb: {
				label: 'layout',
				parent: 'html'
			}
		})
		/*HTML hyperlinks page*/
		.state('hyper', {
			url: '/html/hyperlinks',
			templateUrl: 'partials/views/html/html_hyper.html',
			controller: 'HyperlinkHtmlCtrl',
			ncyBreadcrumb: {
				label: 'hyperlinks',
				parent: 'html'
			}
		})
		/*HTML advanced page*/
		.state('advanced', {
			url: '/html/advanced',
			templateUrl: 'partials/views/html/html_advanced.html',
			ncyBreadcrumb: {
				label: 'advanced',
				parent: 'html'
			}
		})
		/*CSS include page*/
		.state('cssInclude', {
			url: '/css/include',
			templateUrl: 'partials/views/css/css_include.html',
			ncyBreadcrumb: {
				label: 'include',
				parent: 'css'
			}
		})
		/*CSS syntax page*/
		.state('cssSyntax', {
			url: '/css/syntax',
			templateUrl: 'partials/views/css/css_syntax.html',
			ncyBreadcrumb: {
				label: 'syntax',
				parent: 'css'
			}
		})
		/*CSS selectors page*/
		.state('cssSelectors', {
			url: '/css/selectors',
			templateUrl: 'partials/views/css/css_selectors.html',
			ncyBreadcrumb: {
				label: 'selectors',
				parent: 'css'
			}
		})
		/*CSS pseudo classes page*/
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

