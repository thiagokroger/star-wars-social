(function() {
    'use strict';

    angular
        .module('swSocial')
        .directive('swFooter', swFooter);

    function swFooter() {
        return {
            restrict: 'E',
            replace:true,
            templateUrl: "app/shared/directives/swFooterView.html"
        };
    }


})();
