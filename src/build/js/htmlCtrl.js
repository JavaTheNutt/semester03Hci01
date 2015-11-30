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