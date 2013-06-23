'use sctrict';

albatros.controller('homeCtrl', ['$scope','$routeParams', function ($scope, $routeParams) {
	
	var post = {
		title : 'Test de titre',
		content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, dolorum, veniam, sunt nihil velit dolor eum magnam consectetur adipisci perferendis et minima ea rem autem officiis nobis provident repellat doloribus.',
		url : '#/78/',
		about : 'post by dhoko',
		date: '2013-06-19'
	}
	var feeds = [];
	for (var i = 30 - 1; i >= 0; i--) {
		feeds.push(post);
	};
	$scope.feeds = feeds;

	console.log($routeParams)
}])