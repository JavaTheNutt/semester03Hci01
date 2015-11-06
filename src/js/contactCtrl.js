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