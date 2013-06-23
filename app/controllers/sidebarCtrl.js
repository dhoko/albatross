'use sctrict';

albatros.controller('sidebarCtrl', ['$scope', function ($scope) {
	
	var geek = {
		category: 'Geekeries',
		items : [
			{
				title : 'Korben',
				about : 'bonjour ma couille',
				url : '#'
			},
			{
				title : 'Fredzone',
				about : 'bonjour ma couille',
				url : '#'
			},
			{
				title : 'Smashing Magazine',
				about : 'bonjour ma couille',
				url : '#'
			},
			{
				title : 'Le journal du geek',
				about : 'bonjour ma couille',
				url : '#'
			},
			{
				title : 'Le blog du webdesign',
				about : 'bonjour ma couille',
				url : '#'
			}
		]
	};
	var design = {
		category: 'design',
		items : [
			{
				title : 'Le blog du webdesign',
				about : 'bonjour ma couille',
				url : '#'
			},
			{
				title : 'Wdfriday',
				about : 'bonjour ma couille',
				url : '#'
			},
			{
				title : 'Smashing Magazine',
				about : 'bonjour ma couille',
				url : '#'
			},
			{
				title : 'Pinterrest Magazine',
				about : 'bonjour ma couille',
				url : '#'
			},
			{
				title : 'Le blog du webdesign',
				about : 'bonjour ma couille',
				url : '#'
			}
		]
	};
	var feeds = [];
	for (var i = 10 - 1; i >= 0; i--) {
		if(i % 2 ==0 ) {
			feeds.push(design);
		}else{
			feeds.push(geek);
		}
	};
	$scope.feeds = feeds;

	$scope.path = '/views/sidebar.html'
}])