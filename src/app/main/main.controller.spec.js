(function() {
    'use strict';

    describe('controllers', function(){
        var vm, $httpBackend, $timeout, $rootScope;


        beforeEach(module('swSocial'));
        beforeEach(inject(function(_$controller_, _$httpBackend_, _$timeout_, _$rootScope_) {
            vm = _$controller_('MainController');
            $httpBackend = _$httpBackend_
            $timeout = _$timeout_;
            $rootScope = _$rootScope_;
        }));

        it('should define vm', function() {
            expect(vm).toBeDefined();
        });

        it('should not set anything while the tab is not selected', function() {
            expect(vm.friendsError).toBeUndefined();
            expect(vm.friends).toBeUndefined();
            expect(vm.feedError).toBeUndefined();
            expect(vm.feed).toBeUndefined();
            expect(vm.account).toBeUndefined();
        });

        it('should get friends and set variable on controller', function() {
            $httpBackend.expectGET("/assets/files/friends.json").respond(200, []);
            vm.showFriends();
            $httpBackend.flush();
            $timeout.flush();
            expect(vm.friends).toBeDefined();
            expect(vm.friendsError).toBeUndefined();
        });

        it('should show error when cannot get friends', function() {
            $httpBackend.expectGET("/assets/files/friends.json").respond(500);
            vm.showFriends();
            $httpBackend.flush();
            $timeout.flush();
            expect(vm.friendsError).toBeDefined();
            expect(vm.friends).toBeUndefined();
        });


        it('should get feed and set variable on controller', function() {
            $httpBackend.expectGET("/assets/files/feed.json").respond(200, []);
            vm.showFeed();
            $httpBackend.flush();
            $timeout.flush();
            expect(vm.feed).toBeDefined();
            expect(vm.feedError).toBeUndefined();
        });

        it('should show error when cannot get feed', function() {
            $httpBackend.expectGET("/assets/files/feed.json").respond(500);
            vm.showFeed();
            $httpBackend.flush();
            $timeout.flush();
            expect(vm.feedError).toBeDefined();
            expect(vm.feed).toBeUndefined();
        });

        it('should define account functions', function() {
            expect(vm.saveAccount).toBeDefined();
            expect(vm.showAccount).toBeDefined();
        });

        it('should define default user', function() {
            vm.showAccount();
            expect(vm.account.name).toBe("Luke Skywalker");
            expect(vm.account.species).toBe("Human");
        });

        it('should save user', function() {
            vm.showAccount();
            vm.account.name = "Thiago Kroger";
            vm.account.species = "Saiyan";
            vm.saveAccount();
            expect($rootScope.user.name).toBe("Thiago Kroger");
            expect($rootScope.user.species).toBe("Saiyan");
        });

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });


    });
})();
