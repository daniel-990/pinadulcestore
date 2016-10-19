(function(){
		angular
			.module('app')
			.controller('HomeController', HomeController);

			function HomeController($stateParams){
				var vm = this;

			    tools();
			    function tools(){
			    	$('.carousel.carousel-slider').carousel({full_width: true});
			    	$('.button-collapse').sideNav({
			    		menuWidth: 300, 
			    		edge: 'left',
			    		closeOnClick: true
			    	}
			    	);
			    }
				//funciones






			}
})();