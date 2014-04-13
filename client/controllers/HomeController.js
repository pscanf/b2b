ngMeteor.controller("HomeController", function ($scope) {
	$scope.menu = {
		items: [
			{
				title: "Search engines",
				icon: "fa-search",
				type: "submenu",
				items: [
					{
						title: "Google",
						href: "http://www.google.com",
						icon: "fa-google-plus"
					},
					{
						title: "Bing",
						href: "http://www.bing.com"
					},
					{
						title: "Yahoo!",
						href: "http://www.yahoo.com"
					}
				]
			},
			{
				title: "xkcd",
				href: "http://xkcd.com",
				icon: "fa-user"
			}
		]
	};
});
