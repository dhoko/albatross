'use sctrict';

albatros.controller('feedCtrl', ['$scope','$routeParams', function ($scope, $routeParams) {

	$scope.feed = {
		title : 'Le retour du colibri',
		content : '<p>Un an après le dernier post sur le Colibri Libre, me revoilà. La fin du Colibri était lié au fait qu&#8217;écrire via WordPress était une plaie. On perd un temps fou pour écrire, c&#8217;est une usine à gaz, je veux ne pas perdre du temps et je veux un CMS ultra léger et rapide.</p> <p><a href="https://github.com/dhoko/cyaneus/">Cyaneus</a> un générateur de site statique ( <em>full html donc</em> ) écrit en PHP est là. Je suis parti à partir de <a href="http://jeunes-science.org/kiwi/">Kiwi</a> un micro générateur de site en PHP écrit par <a href="https://twitter.com/aljes">@aljes</a>. Son système est rapide et efficace, je me suis basé dessus pour le rendre statique.</p> <p>Le but c&#8217;est de ne plus avoir de PHP du côté serveur (du moins pour l&#8217;affichage.)</p> <p><img src="http://dhoko.me/articles/cyaneus_logo.png" alt="Logo Cyaneus" title="Cyaneus, un logo vieux de 2ans..." /></p> <h2>A propos de Cyaneus</h2> <p>Pour le moment, il est encore en phase bêta, donc il n&#8217;a pas de licence. Pour la suite, beerware peut être. Quoi qu&#8217;il en soit il sera libre.</p> <p>Pour l&#8217;instant c&#8217;est encore très basique, il ne gère pas les commentaires par exemple. Il est capable de générer&#160;:</p> <ul> <li>Une page d&#8217;index</li> <li>Une page d&#8217;archive</li> <li>Une page par article</li> <li>Un flux RSS</li> </ul> <p>C&#8217;est encore maigre, le système est vraiment encore très (trop) statique.</p> <h3>Côté serveur</h3> <p>Justement initialement il ne devait pas y avoir de PHP de ce côté-là de la force, sauf que pour la gestion des webhooks Github il faut bien un script sur le serveur.</p> <p>Yep Cyaneus gère les hooks github, preuve en est ce blog se met à jour via ce que je push sur mon dépôt.</p> <p>Le script&#160;: <a href="https://github.com/dhoko/cyaneus/">Cyaneus</a>.</p>',
		url : '/78/monfeed',
		about : 'post by dhoko',
		date: '2013-06-19'
	}

	console.log($routeParams)
}])