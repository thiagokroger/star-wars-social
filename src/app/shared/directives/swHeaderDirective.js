(function() {
    'use strict';

    angular
        .module('swSocial')
        .directive('swHeader', swHeader);

    function swHeader() {
        return {
            restrict: 'E',
            replace:true,
            templateUrl: "app/shared/directives/swHeaderView.html"
        };
    }


})();
