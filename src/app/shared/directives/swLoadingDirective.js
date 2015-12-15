(function() {
    'use strict';

    angular
        .module('swSocial')
        .directive('swLoading', swLoading);

    function swLoading() {
        return {
            restrict: 'E',
            replace:true,
            templateUrl: "app/shared/directives/swLoadingView.html"
        };
    }


})();
