ngMeteor.config(["$stateProvider", "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                template: Template.home,
				controller: "HomeController"
            })
            .state("chooseIdentity", {
                url: "/scegli",
                template: Template.chooseIdentity,
				controller: "ChooseIdentityController"
            })
            .state("loading", {
                url: "/loading",
                template: Template.loading
            })
            .state("login", {
                url: "/login",
                template: Template.login,
				controller: "LoginController"
            })
            .state("profile", {
                url: "/profilo",
                template: Template.profile,
				controller: "ProfileController"
            });
    }
]);

ngMeteor.run(["$rootScope", "$state", "$interval", function ($rootScope, $state, $interval) {
	$rootScope.$on("$stateChangeStart", function (e, to) {
		if (to.name === "login" || to.name === "loading") {
			return;
		}
		if (!Meteor.loggingIn()) {
			if (!Meteor.user()) {
				e.preventDefault();
				$state.go("login");
			}
		} else {
			e.preventDefault();
			$state.go("loading");
			var interval = $interval(function () {
				if (!Meteor.loggingIn()) {
					if (!Meteor.user()) {
						$state.go("login");
					} else {
						$state.go(to.name);
					}
					$interval.cancel(interval);
				}
			}, 100);
		}
	});
}]);
