app.controller('ContactCtrl', ['$scope', function ($scope) {
	$scope.checkEmail = function () {
		if($scope.contactForm.emailInput.$valid){
			$('#submit').removeClass('disabled');
			$('#emailInput').removeClass('contactFormInvalid');
		} else {
			$('#submit').addClass('disabled');
			$('#emailInput').addClass('contactFormInvalid');
		}
	};
	/*$scope.sendMessage = function () {
		if($('#submit').hasClass('disabled')){
			return;
		}
		/!*if($scope.contactForm.messageInput.$invalid){
			alert.('Please enter a message');
		}*!/
		$('p.confirmMessage').show();
	};*/
	/*$scope.validateEmail = function(){
	 if($scope.contactForm.emailInput.$invalid){
	 $('#emailInput').addClass('contactFormInvalid');
	 }
	 };*/
}]);