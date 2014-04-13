ngMeteor.run(["$rootScope", function ($rootScope) {
	Meteor.subscribe("persons");
	Meteor.subscribe("groups");
	Deps.autorun(function () {
		var persons = Persons.find().fetch();
		$rootScope.$apply(function () {
			$rootScope.Persons = persons;
		});
	});
	Deps.autorun(function () {
		var groups = Groups.find().fetch();
		$rootScope.$apply(function () {
			$rootScope.Groups = groups;
		});
	});
}]);

Meteor.Loader.loadJs("//maps.googleapis.com/maps/api/js?libraries=places&sensor=false&language=it");
