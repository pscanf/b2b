ngMeteor.controller("ChooseIdentityController", ["$scope", "$sessionStorage", "$state", function ($scope, $sessionStorage, $state) {
	$scope.hasSome = function () {
		return ($scope.Persons.length + $scope.Groups.length) > 0;
	};
	$scope.accessAsPerson = function (index) {
		$sessionStorage.identity = $scope.Persons[index]._id;
		$state.go("home");
	};
	$scope.accessAsGroup = function (index) {
		$sessionStorage.identity = $scope.Groups[index]._id;
		$state.go("home");
	};
	if ($scope.hasSome()) {
		$scope.addPanelCollapsed = true;
	}
	$scope.identityType = "person";
	$scope.type = {
		person: "person",
		group: "group"
	};
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
	$scope.addIdentity = function () {
		if ($scope.identityType === "person") {
			$sessionStorage.identity = Persons.insert($scope.person);
		}
		if ($scope.identityType === "group") {
			$sessionStorage.identity = Groups.insert($scope.group);
		}
		$state.go("home");
	};
}]);
