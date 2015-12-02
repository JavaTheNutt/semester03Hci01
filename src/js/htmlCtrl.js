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