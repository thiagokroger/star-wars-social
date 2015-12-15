(function() {
    'use strict';

    angular
        .module('swSocial')
        .directive('swFeed', swFeed);

    function swFeed() {
        return {
            restrict: 'E',
            replace:true,
            scope: {
                data:'@'
            },
            link: function(scope) {
                scope.feed = JSON.parse(scope.data);
            },
            templateUrl: "app/shared/directives/swFeedView.html"
        };
    }


})();
