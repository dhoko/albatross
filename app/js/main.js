'use strict';

var albatros = angular.module('albatros',[]);

albatros.config(function($routeProvider) {

	$routeProvider
		.when('/options', {
			controller: 'optionsCtrl',
			templateUrl: 'templates/options.html'
		})
		.when('/', {
			controller: 'homeCtrl',
			templateUrl: 'templates/home.html'
		})
		.when('/:id', {
			controller: 'homeCtrl',
			templateUrl: 'templates/home.html'
		})
		.when('/:id/:name', {
			controller: 'homeCtrl',
			templateUrl: 'templates/home.html'
		})


		.otherwise({
			redirectTo: '/'
		})

});