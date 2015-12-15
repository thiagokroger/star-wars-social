(function() {
    'use strict';

    angular
        .module('swSocial')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope) {

        $rootScope.user = {
            name:"Luke Skywalker",
            species:"Human"
        };

    }

})();
