'use strict';

var albatros = angular.module('albatros',[]);

albatros.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			controller: 'homeCtrl',
			templateUrl: 'views/home.html'
		})

		.when('/:id', {
			controller: 'feedCtrl',
			templateUrl: 'views/feed.html'
		})

		.otherwise({
			redirectTo: '/'
		})

});