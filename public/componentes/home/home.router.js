(function(){
    angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/home")
            $stateProvider
            .state('route1',{
                url: '/home',
                templateUrl: 'componentes/home/home.html',
                controller: 'HomeController as vm'
            })
        })
})();