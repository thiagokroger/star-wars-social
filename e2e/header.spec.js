'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./header.po');
  });

  it('should load the correct welcome message according to default user', function() {
    expect(page.welcomeMessage.getText()).toBe('Welcome, Luke Skywalker');
  });


});
