ngMeteor.controller("LoginController", ["$scope", "$state", function ($scope, $state) {
	$scope.login = {};
	$scope.login.facebook = function () {
		$scope.retryLogin = false;
		$scope.loggingIn = true;
		Meteor.loginWithFacebook(function (err) {
			if (err) {
				return $scope.$apply(function () {
					$scope.loggingIn = false;
					$scope.retryLogin = true;
				});
			}
			$state.go("chooseIdentity");
		});
	};
}]);
