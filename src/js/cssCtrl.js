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
	/*Function to toggle between the <div>'s. Takes a parameter of the event that triggered the function call. This will be used
	* to divine the id of the button that was clicked*/
	$scope.toggleViews = function (event) {
		/*Get id of button clicked*/
		var id = event.target.attributes.id.value;
		/*Classes <div>*/
		var classes = $('#cssClasses');
		/*Ids <div>*/
		var ids = $('#cssIds');
		/*Switch between ids view and classes view*/
		if(id == 'showId'){
			classes.addClass('hide');
			ids.removeClass('hide');
		} else {
			classes.removeClass('hide');
			ids.addClass('hide');
		}
	}
}]);
/*This is the controller for the CSS Pseudo view*/
app.controller('PseudoCtrl', ['$scope', function ($scope) {
	/*Code snippets to be posted to <pre> tags*/
	$scope.examples = {
		hoverExample : 'a:hover{\n\ttext-decoration:none;\n}',
		linkExample: 'a:link{\n\tcolor:red;\n}',
		visitedExample: 'a:visited{\n\tcolor:purple;\n}',
		activeExample: 'a:active{\n\tcolor:black;\n}',
		htmlExample: '\<a href=\"google.com\"\ target=\"_blank\">Google\</a\>'
	};
	/*This function will switch between views. It takes a parameter of an event which will be used to obtain the id of the button that was clicked*/
	$scope.toggleViews = function (event) {
		/*Example <div>*/
		var exm = $('#exm');
		/*Explanation <div>*/
		var expl = $('#expl');
		/*Id of button click*/
		var id = event.target.attributes.id.value;
		/*Show/Hide <div>'s*/
		if(id == 'btnExp'){
			exm.addClass('hide');
			expl.removeClass('hide');
		} else{
			expl.addClass('hide');
			exm.removeClass('hide');
		}
	}
}]);