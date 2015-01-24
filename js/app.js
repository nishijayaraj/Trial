var zacApp = angular.module('zacApp', ['ngRoute']);

        // configure our routes
	zacApp.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
	    $routeProvider	                     
			.when('/', { // route for the home page
				templateUrl : 'partials/home.html',
				controller  : 'mainController'
			})
                        
			.when('/grid', { // route for the about page
				templateUrl : 'partials/grid.html',
				controller  : 'gridController'
			}).otherwise({
		        redirectTo: '/home'
		      });
	    //$locationProvider.html5Mode(true);
		  }]);
	

	

