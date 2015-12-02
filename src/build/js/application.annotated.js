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

/*This is the controller for the include css page*/
app.controller('IncludeCssControl', ['$scope', function ($scope) {
	/*Code snippets to be posted to <pre> tags*/
	$scope.examples = {
		 preText01  :'\<link rel=\"stylesheet\" href=\"style.css\"\>',
		preText02 : '\<style\>\n\tp:{\n\t\tcolor:red;\n\t\tfont-size:12px;\n\t}\n\th1{\n\t\tcolor:blue;\n\t}\n\</style\>'
	};
	/*This is the function that will show the internal css <div>*/
	$scope.showInternal = function () {
		/*function call to private function*/
		toggleView('inlineCss', 'externalCss');
	};
	/*This is the function that will show the external css <div>*/
	$scope.showExternal = function () {
		toggleView('inlineCss', 'internalCss');
	};
	/*This is the function that will show the inline css <div>*/
	$scope.showInline = function () {
		toggleView('internalCss', 'externalCss');
	};
	/*This is the function that will toggle the code snippet*/
	$scope.toggleCode = function(){
		/*The <div> containing the code snippet*/
		var internalExample =	$('#internalExample');
		/*Conditional checking if code is hidden*/
		if(internalExample.hasClass('hide')){
			/*Show snippet*/
			internalExample.removeClass('hide');
		} else {
			/*Hide snippet*/
			internalExample.addClass('hide');
		}
	};
	/*Private function to show/hide separate <div>'s. Takes the id's of the <div>'s to be hidden as parameters*/
	var toggleView = function (id01, id02) {
		/*Store the id's*/
		var ids = ['internalCss', 'externalCss', 'inlineCss'];
		/*Hide the two div's passed as parameters */
		$('#' + id01).addClass('hide');
		$('#' + id02).addClass('hide');
		/*Iterate through array created above*/
		for(var i = 0; i < ids.length; i++){
			/*If current id is not either of the ones to be hidden...*/
			if(!(ids[i]==(id01)|| ids[i]==(id02))){
				/*... show it*/
				$('#' + ids[i]).removeClass('hide');
				/*Return as there is no need to iterate through the rest of the list*/
				return;
			}
		}
	}
}]);
/*This is the controller for the CSS syntax page*/
app.controller('SyntaxCssCtrl', ['$scope', function ($scope) {
	/*Code snippets to be posted to the <pre> tags*/
	$scope.examples = {
		preText02  :'h1{\n\tcolor: red;\n}\np{\n\tcolor: blue;\n}',
		preText03  :'p{\n\t/*This will set the color to a hex value. This is the hex value for red*/\n\tcolor:#ff0000;\n\n\t/*This will change the ' +
		'shape of the element to have round corners*/\n\tborder-radius:25px;\n\n\t/*This  will set the background color to blue*/' +
		'\n\tbackground-color: #0000ff;\n\n\t/*This will set the font weight to bold*/\n\tfont-weight:bold;\n\n\t/*This will uderline the font/*' +
		'\n\ttext-decoration:underline;\n}',
		preText04  :'\<p\>This paragraph is affected\</p\>\n<h1>But this heading is not\</h1\>',
	};
	/*Function to show/hide code snippet*/
	$scope.toggleCode = function () {
		/*The element to show/hide*/
		var commonRules = $('#commonRules');
		/*If hidden...*/
		if(commonRules.hasClass('hide')){
			/*... show*/
			commonRules.removeClass('hide');
		} else {
			/*else hide*/
			commonRules.addClass('hide');
		}
	}
}]);
/*This is the controller of the CSS selectors page*/
app.controller('SelectorsCssCtrl', ['$scope', function ($scope) {
	/*Code snippets to be posted to <pre> tags in the classes <div>*/
	$scope.classes = {
		pre01 : '\<p\>First Paragraph\</p\>\n\<p class=\"para\"\>Second Paragraph\</p\>',
		pre02 : 'p{\n\tcolor: #0000ff;\n}\np.para{\n\tcolor: #ff0000;\n}\n'
	};
	/*Code snippets to be posted to <pre> tags in the ids <div>*/
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
	$scope.toggleViews = function (event) {
		var exm = $('#exm');
		var expl = $('#expl');
		var id = event.target.attributes.id.value;
		if(id == 'btnExp'){
			exm.addClass('hide');
			expl.removeClass('hide');
		} else{
			expl.addClass('hide');
			exm.removeClass('hide');
		}
	}
}]);

/*This is the controller for the advanced HTML page. */
app.controller('AdvancedHtmlCtrl', ['$scope', function ($scope) {
	/*This function shows/hides the table on the advanced HTML page*/
	$scope.toggleTable = function () {
		$('.htmlAdvancedTable').toggle();
	};
}]);
/*This is the controller for the basic HTML page*/
app.controller('BasicHtmlCtrl', ['$scope', function ($scope) {
	/*This JavaScript object holds strings that will be posted into the <pre> tags*/
	$scope.examples = {
		pTag: '\<p\>This is a paragraph\</p\>\n',
		headingTag: '\<h1\>Heading 1\</h1\>\n' +
		'\<h2\>Heading 2\</h2\>\n' +
		'\<h3\>Heading 3\</h3\>\n' +
		'\<h4\>Heading 4\</h4\>\n' +
		'\<h5\>Heading 5\</h5\>\n' +
		'\<h6\>Heading 6\</h6\>\n',
		hrTag: '\<hr\>\n',
		brTag: '\<br\>',
		imgTag: '\<img src=\"../../img/htmlLogo.jpg\" alt=\"Learn HTML\"\>'

	};
	/*This function will toggle views between the explanations and examples on this page. It takes an event parameter which
	 * will be used to divine the id of the button that is clicked.*/
	$scope.toggleViews = function (event) {
		/*Below is an example of "caching the DOM" which allows certain elements to be stored in variables so that when they are needed again,
		 * the script does not need to locate them again*/
		/*The <div> containing the explanations*/
		var exp = $('#htmlExp');
		/*The <div> containing the examples*/
		var exm = $('#htmlExm');
		/*This will find the id of the button that has been clicked. This makes the function more generic and allows the use of a single function
		 * to display both <div>'s*/
		var id = event.target.attributes.id.value;
		if (id == 'exm') {
			exp.addClass('hide');
			exm.removeClass('hide');
		} else {
			exm.addClass('hide');
			exp.removeClass('hide');
		}
	};
}]);
/*This is the controller for the hyperlink HTML page*/
app.controller('HyperlinkHtmlCtrl', ['$scope', function ($scope) {
	/*This is an object to hold code examples to be posted to the <pre> tags*/
	$scope.examples = {
		aTag: '\<a href=\"google.com\"\ target=\"_blank\">google\</a\>'
	}
}]);