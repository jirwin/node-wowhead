var HSCard = function(card) {
  this.id = card.id;
  this.cost = card.cost;
  this.attack = card.attack;
  this.health = card.health;
  this.quality = card.quality;
  this.name = card.name;
  this.description = card.description;
  this.durability = card.durability;
};

HSCard.prototype.getLink = function() {
  return HSCard.searchUrl + 'card=' + this.id;
};

HSCard.searchTerm = function(term) {
  return {
    url: HSCard.searchUrl + 'search?q=' + term,
    type: HSCard.searchType
  };
};

HSCard.searchType = 'hearthstonecards';

HSCard.searchUrl = 'http://www.hearthhead.com/';

module.exports = HSCard;
