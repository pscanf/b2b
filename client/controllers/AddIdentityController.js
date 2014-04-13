ngMeteor.controller("AddIdentityController", ["$scope", "$sessionStorage", "$state", function ($scope, $sessionStorage, $state) {
	$scope.type = "person";
	$scope.person = {
		info: {},
		services: [],
		user: Meteor.userId()
	};
	$scope.group = {
		info: {},
		services: [],
		user: Meteor.userId()
	};
	$scope.noop = function () {};
	$scope.addIdentity = function () {
		if ($scope.type === "person") {
			$sessionStorage.identity = Persons.insert($scope.person);
		}
		if ($scope.type === "group") {
			$sessionStorage.identity = Groups.insert($scope.group);
		}
		$state.go("home");
	};
}]);
