'use sctrict';

albatros.controller('homeCtrl', [
	'$rootScope','$scope','$routeParams','$location', 'feeds',
	function ($rootScope, $scope, $routeParams, $location, feeds) {

	// Find each feeds
	$scope.feeds = feeds.get();
	$scope.f_read = {};	
	$scope.home = {
		date : new Date(),
		latest : [feeds.get(3)]
	};	

	// If a route params exist we show the good post
	if(~~$routeParams.id) {
		angular.forEach($scope.feeds, function(value, key){
			if(value.id == ~~$routeParams.id) {
				$scope.f_read = value;
				return;
			}
			return true;
		});
	}


	// Listen for a click on a feed in the sidebar
	$scope.read = function(feed) {
		$rootScope.unread--;
		// Title to url friendly -> test de titre = test-de-titre
		var name = feed.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
		$scope.f_read = feed;
		$location.path('/' + feed.id + '/' + name);
		// Mark the feed as read
		feed.read = true;
	}

	console.log($routeParams)
	console.log(feeds.get())
}])