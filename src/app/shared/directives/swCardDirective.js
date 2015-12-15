(function() {
    'use strict';

    angular
        .module('swSocial')
        .directive('swCard', swCard);

    function swCard() {
        return {
            restrict: 'E',
            transclude:true,
            replace:true,
            scope: {
                avatar:'@'
            },
            templateUrl: "app/shared/directives/swCardView.html"
        };
    }


})();
