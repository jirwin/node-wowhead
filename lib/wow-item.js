var WowItem = function(item) {
  var qualityName = item.name;

  this.id = item.id;
  this.level = item.level;
  this.requiredLevel = item.reqlevel || 0;
  this.quality = qualityName[0];
  this.name = qualityName.substr(1);
  this.slot = item.slot;
  this.dps = item.dps;
  this.speed = item.speed;
};

WowItem.prototype.getLink = function() {
  return WowItem.searchUrl + 'item=' + this.id;
};

WowItem.searchTerm = function(term) {
  return {
    url: WowItem.searchUrl + 'search?q=' + term,
    type: WowItem.searchType
  };
};

WowItem.searchType = 'items';

WowItem.searchUrl = 'http://www.wowhead.com/';

module.exports = WowItem;
