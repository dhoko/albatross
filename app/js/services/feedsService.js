'use Strict';

albatros.factory('feeds', [
	'$http', '$rootScope',
	function ($http, $rootScope) {

		$rootScope.unread = 0;
		var post = {
			id          : 1,
			title       : 'Deploy using Git été',
			description : 'FTP is so 90s, look at git',
			content     : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, soluta, voluptatibus vel ipsum quod quam rem minima labore illo sapiente obcaecati iure necessitatibus nisi id asperiores officiis itaque atque nesciunt.',
			date        : '11-11-2013',
			url         : 'lol',
			author      : 'dhoko',
			read        : false
		}
		var post2 = {
			id          : 10,
			title       : 'Nginx sort une version commerciale de son serveur web - Le Monde Informatique - Liens éclairs',
			description : 'J\'ai l\'impression que la vraie différence (au délà du support) avec la version OpenSource.',
			content     : 'J\'ai l\'impression que la vraie différence (au délà du support) avec la version OpenSource est "<br>Modifier la configuration en cours d\'exécution". Car a priori, tout le reste est faisable en s\'emmerdant grave avec la conf\'.<br><br>Quant à ça:<br>"En plus de ces fonctions de contrôle, la version commerciale permet de récupérer des statistiques sur une copie de Nginx en cours d\'exécution, au format JSON (JavaScript Simple Object Notation). « On peut importer ces paramètres dans n\'importe quel système de monitoring commercial classique ou Open Source, ou l\'on peut récupérer son propre template en HTML ou JavaScript », a déclaré Andrew Alexeev."<br>Ah, avant on ne pouvait pas faire de stats ou de monitoring sans arrêter le processus?',
			url         : 'https://shaarli.e-loquens.fr/shaarli/?5II38A',
			date        : '11-11-2013',
			author      : 'e-loquens',
			read        : false
		}
		var post3 = {
			id          : 100,
			title       : 'La thérorie du marteau',
			date        : '11-11-2013',
			description : 'J\'ai l\'impression que la vraie différence (au délà du support) avec la version OpenSource.',
			content     : 'J\'ai l\'impression que la vraie différence (au délà du support) avec la version OpenSource est "<br>Modifier la configuration en cours d\'exécution". Car a priori, tout le reste est faisable en s\'emmerdant grave avec la conf\'.<br><br>Quant à ça:<br>"En plus de ces fonctions de contrôle, la version commerciale permet de récupérer des statistiques sur une copie de Nginx en cours d\'exécution, au format JSON (JavaScript Simple Object Notation). « On peut importer ces paramètres dans n\'importe quel système de monitoring commercial classique ou Open Source, ou l\'on peut récupérer son propre template en HTML ou JavaScript », a déclaré Andrew Alexeev."<br>Ah, avant on ne pouvait pas faire de stats ou de monitoring sans arrêter le processus?',
			url         : 'https://shaarli.e-loquens.fr/shaarli/?5II38A',
			author      : 'e-loquens',
			read        : false
		}
		var feeds = [];
		for (var i = 15 - 1; i >= 0; i--) {

			post.id = ++post.id;
			post2.id = ++post2.id;
			feeds.push(post);
			feeds.push(post2);
		};

		console.log(feeds);
		return {
			get : function(id) {

				$rootScope.unread = feeds.length;
				if(~~id) {
					console.log('Yoooo mama');
					return post3;
				}

				return feeds;
			}


		}

	}
]);