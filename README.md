# node-wowhead

A node module that gathers information from Wowhead. It attempts to use the same data format that the [Wowhead Tooltip Plugin](http://www.wowhead.com/tooltips) uses.

It currently supports getting WoW item stats, and HearthStone card stats.

## Install
`npm install wowhead`

## Examples
```javascript
> var wowhead = require('./node-wowhead')();
>
> // Searching for cards using any string will return the top search result
> wowhead.getCard('alex', function(err, card) { console.dir(card); });
> { id: 581,
  cost: 9,
  attack: 8,
  health: 8,
  quality: 5,
  name: 'Alexstrasza',
  description: 'Battlecry: Set a hero\'s remaining Health to 15.' }
>
> // Cards can return their link to HearthHead with getLink()
> wowhead.getCard('krush', function(err, card) { console.dir(card.getLink()); });
> 'http://www.hearthhead.com/card=1144'
>
> // Items are just like cards
> wowhead.getItem('thunderfury', function(err, item) { console.dir(item); });
> { id: 19019,
  level: 80,
  requiredLevel: 60,
  quality: '2',
  name: 'Thunderfury, Blessed Blade of the Windseeker',
  slot: 13,
  dps: 46.1,
  speed: 1.9 }
```

## License
Apache v2.0
