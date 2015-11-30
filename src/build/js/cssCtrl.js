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