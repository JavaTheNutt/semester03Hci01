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

app.controller('IncludeCssControl', ['$scope', function ($scope) {
	$scope.examples = {
		 preText01  :'\<link rel=\"stylesheet\" href=\"style.css\"\>',
		preText02 : '\<style\>\n\tp:{\n\t\tcolor:red;\n\t\tfont-size:12px;\n\t}\n\th1{\n\t\tcolor:blue;\n\t}\n\</style\>'
	};
	$scope.showInternal = function () {
		toggleView('inlineCss', 'externalCss');
	};
	$scope.showExternal = function () {
		toggleView('inlineCss', 'internalCss');
	};
	$scope.showInline = function () {
		toggleView('internalCss', 'externalCss');
	};
	$scope.toggleCode = function(){
		var internalExample =	$('#internalExample');
		if(internalExample.hasClass('hide')){
			internalExample.removeClass('hide');
		} else {
			internalExample.addClass('hide');
		}
	};
	var toggleView = function (id01, id02) {
		var ids = ['internalCss', 'externalCss', 'inlineCss'];
		$('#' + id01).addClass('hide');
		$('#' + id02).addClass('hide');
		for(var i = 0; i < ids.length; i++){
			if(!(ids[i]==(id01)|| ids[i]==(id02))){
				$('#' + ids[i]).removeClass('hide');
				return;
			}
		}
	}
}]);
app.controller('SyntaxCssCtrl', ['$scope', function ($scope) {
	$scope.examples = {
		preText02  :'h1{\n\tcolor: red;\n}\np{\n\tcolor: blue;\n}',
		preText03  :'p{\n\t/*This will set the color to a hex value. This is the hex value for red*/\n\tcolor:#ff0000;\n\n\t/*This will change the ' +
		'shape of the element to have round corners*/\n\tborder-radius:25px;\n\n\t/*This  will set the background color to blue*/' +
		'\n\tbackground-color: #0000ff;\n\n\t/*This will set the font weight to bold*/\n\tfont-weight:bold;\n\n\t/*This will uderline the font/*' +
		'\n\ttext-decoration:underline;\n}',
		preText04  :'\<p\>This paragraph is affected\</p\>\n<h1>But this heading is not\</h1\>',
	};
	$scope.toggleCode = function () {
		var commonRules = $('#commonRules');
		if(commonRules.hasClass('hide')){
			commonRules.removeClass('hide');
		} else {
			commonRules.addClass('hide');
		}
	}
}]);
app.controller('SelectorsCssCtrl', ['$scope', function ($scope) {
	$scope.selectedPage = 'class';
	$scope.classes = {
		pre01 : '\<p\>First Paragraph\</p\>\n\<p class=\"para\"\>Second Paragraph\</p\>',
		pre02 : 'p{\n\tcolor: #0000ff;\n}\np.para{\n\tcolor: #ff0000;\n}\n'
	};
	$scope.ids = {
		pre01 : '\<p\>First Paragraph\</p\>\n\<p id=\"para\"\>Second Paragraph\</p\>',
		pre02 : 'p{\n\tcolor: #0000ff;\n}\np#para{\n\tcolor: #ff0000;\n}\n'
	};
	$scope.toggleViews = function (event) {
		var id = event.target.attributes.id.value;
		var classes = $('#cssClasses');
		var ids = $('#cssIds');
		if(id == 'showId'){
			classes.addClass('hide');
			ids.removeClass('hide');
		} else {
			classes.removeClass('hide');
			ids.addClass('hide');
		}
	}
}]);
app.controller('PseudoCtrl', ['$scope', function ($scope) {

	$scope.examples = {
		hoverExample : 'a:hover{\n\ttext-decoration:none;\n}',
		linkExample: 'a:link{\n\tcolor:red;\n}',
		visitedExample: 'a:visited{\n\tcolor:purple;\n}',
		activeExample: 'a:active{\n\tcolor:black;\n}',
		htmlExample: '\<a href=\"google.com\"\ target=\"_blank\">Google\</a\>'
	};
	$scope.toggleViews = function (obj) {
		var exm = $('#exm');
		var expl = $('#expl');
		var id = obj.target.attributes.id.value;
		if(id == 'btnExp'){
			exm.addClass('hide');
			expl.removeClass('hide');
		} else{
			expl.addClass('hide');
			exm.removeClass('hide');
		}
	}
}]);

app.controller('AdvancedHtmlCtrl', ['$scope', function ($scope) {
	$scope.toggleTable = function () {
		$('.htmlAdvancedTable').toggle();
	};
}]);
app.controller('BasicHtmlCtrl', ['$scope', function ($scope) {
	$scope.examples = {
		pTag: '\<p\>This is a paragraph\</p\>\n',
		headingTag : '\<h1\>Heading 1\</h1\>\n' +
		'\<h2\>Heading 2\</h2\>\n' +
		'\<h3\>Heading 3\</h3\>\n' +
		'\<h4\>Heading 4\</h4\>\n' +
		'\<h5\>Heading 5\</h5\>\n' +
		'\<h6\>Heading 6\</h6\>\n',
		hrTag: '\<hr\>\n',
		brTag: '\<br\>',
		imgTag : '\<img src=\"../../img/htmlLogo.jpg\" alt=\"Learn HTML\"\>'

	};
	$scope.toggleViews = function (event) {
		var exp = $('#htmlExp');
		var exm = $('#htmlExm');
		var id = event.target.attributes.id.value;
		console.log(id);
		if(id == 'exm'){
			console.log('test');
			exp.addClass('hide');
			exm.removeClass('hide');
		} else {
			exm.addClass('hide');
			exp.removeClass('hide');
		}
	};
}]);
app.controller('HyperlinkHtmlCtrl', ['$scope', function ($scope) {
	$scope.examples = {
		aTag: '\<a href=\"google.com\"\ target=\"_blank\">google\</a\>'
	}
}]);