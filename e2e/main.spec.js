'use strict';

describe('The main view', function () {
    var page, headerPage;

    beforeEach(function () {
        browser.get('/index.html');
        page = require('./main.po');
        headerPage = require('./header.po');
    });

    it('should move to friends tab and show 10 friends', function() {
        page.selectTabFriends();
        expect(page.friends.count()).toBe(10);
    });

    it('should move to feed tab and show 5 feeds', function() {
        page.selectTabFeed();
        expect(page.feed.count()).toBe(5);
    });

    it('should move to account tab and save account', function() {
        page.selectTabAccount();
        page.account.name.clear();
        page.account.name.sendKeys("Thiago Kroger");
        page.account.species.clear();
        page.account.species.sendKeys("Saiyan");
        page.account.save();
        expect(headerPage.welcomeMessage.getText()).toBe("Welcome, Thiago Kroger");
    });


});
