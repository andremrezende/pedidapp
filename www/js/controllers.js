/* controllers da PedidaApp */
/* PS. Em uma App complexa, crie arquivos separados para cada controller */

angular.module('starter').controller('HomeController', function($scope, ProdutosService) {
	ProdutosService.lista().then(function(dados){
		$scope.bolos = dados;	
	});
});
