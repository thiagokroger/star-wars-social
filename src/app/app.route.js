(function() {
    'use strict';

    angular
        .module('swSocial')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            });

        $urlRouterProvider.otherwise('/main');
    }

})();
