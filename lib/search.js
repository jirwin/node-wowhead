var async = require('async');
var request = require('request');

var HSCard = require('./hs-card');
var WowItem = require('./wow-item');

var WHSearch = function() {
};

WHSearch.prototype.getCard = function(term, callback) {
  var self = this;

  async.auto({
    search: this.search.bind(this, HSCard.searchTerm(term)),

    process: ['search', function process(callback, results) {
      var cards = results.search;

      if (cards && cards.length) {
        callback(null, new HSCard(cards[0]));
        return;
      }

      callback();
    }]
  }, function(err, results) {
    callback(err, results.process);
  });
};

WHSearch.prototype.getItem = function(term, callback) {
  var self = this;

  async.auto({
    search: this.search.bind(this, WowItem.searchTerm(term)),

    process: ['search', function process(callback, results) {
      var items = results.search;

      if (items && items.length) {
        callback(null, new WowItem(items[0]));
        return;
      }

      callback();
    }]
  }, function(err, results) {
    callback(err, results.process);
  });
};

WHSearch.prototype.search = function(term, callback) {
  // Random 'globals' HH needs
  var LANG = {},
      $WH = {},
      reqOpts,
      myTabs,
      p_tabOpts,
      Listview;

  $WH.sprintf = function() {};

  Listview = function(hhObj) {
    this.data = hhObj.data;
  };

  reqOpts = {
    url: term.url,
    headers: {
      'User-Agent': 'wowhead-client'
    }
  };

  request(reqOpts, function(err, resp, html) {
    var match,
        results;

    if (err) {
      callback(err);
      return;
    }

    match = html.split('\n').filter(function(line) {
      return line.match(/^new Listview/) && line.indexOf("id: '" + term.type + "'") !== -1;
    })[0];

    if (match) {
      results = eval(match);
    } else {
      callback(null, []);
      return;
    }

    callback(null, results.data);
  });
};

module.exports = function() {
  return new WHSearch();
};
