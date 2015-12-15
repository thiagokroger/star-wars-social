(function() {
    'use strict';

    angular
        .module('swSocial')
        .directive('swError', swError);

    function swError() {
        return {
            restrict: 'E',
            replace:true,
            templateUrl: "app/shared/directives/swErrorView.html"
        };
    }


})();
