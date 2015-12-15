(function() {
    'use strict';

    angular
        .module('swSocial')
        .service('MainService', MainService);

    function MainService($http) {

        return {

            getFriends: function () {
                return $http.get("/assets/files/friends.json");
            },
            getFeed: function () {
                return $http.get("/assets/files/feed.json");
            }

        };
    }

})();
