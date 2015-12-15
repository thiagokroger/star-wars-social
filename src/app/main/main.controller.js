(function() {
    'use strict';

    angular
        .module('swSocial')
        .controller('MainController', MainController);

    function MainController(MainService, $rootScope, $timeout) {
        var vm = this;

        vm.showFriends = function(){
            MainService.getFriends()
                .success(function(data){
                    $timeout(function(){
                        vm.friends = data;
                    },2000);
                })
                .error(function(){
                    vm.friendsError = true;
                });
        };
        vm.showFeed = function(){
            MainService.getFeed()
                .success(function(data){
                    $timeout(function(){
                        vm.feed = data;
                    },2000);
                })
                .error(function(){
                    vm.feedError = true;
                });
        };
        vm.showAccount = function(){
            vm.account = angular.copy($rootScope.user);
        };
        vm.saveAccount = function(){
            $rootScope.user = angular.copy(vm.account);
        };
    }

})();
