/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
    this.selectTabFeed = function(){
        element(by.css('[aria-controls="tab-content-0"]')).click();
    };
    this.selectTabFriends = function(){
        element(by.css('[aria-controls="tab-content-1"]')).click();
    };
    this.selectTabAccount = function(){
        element(by.css('[aria-controls="tab-content-2"]')).click();
    };

    this.friends = element(by.css('body')).all(by.repeater('friend in main.friends'));
    this.feed = element(by.css('body')).all(by.repeater('feed in main.feed'));
    this.account = {
        name:element(by.model('main.account.name')),
        species:element(by.model('main.account.species')),
        save:function(){
            element(by.css('[ng-click="main.saveAccount()"]')).click();
        }
    };

/*
  this.jumbEl = element(by.css('.jumbotron'));
  this.h1El = this.jumbEl.element(by.css('h1'));
  this.imgEl = this.jumbEl.element(by.css('img'));
  this.thumbnailEls = element(by.css('body')).all(by.repeater('awesomeThing in main.awesomeThings'));
 */
};

module.exports = new MainPage();
