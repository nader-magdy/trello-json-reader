console.log(process.argv.slice(2));

let boards = process.argv.slice(2);
boards.forEach(boardName => {
  let board = require(`./boards/${boardName}.json`);
  
  function getCardLabels(card) {
    return board.labels.map(l => {
      return card.idLabels.indexOf(l.id) > -1 ? l.name : ''
    }).join(', ');
  
  }
  
  console.log('************************************');
  console.log('Reading board ->\t', board.name);
  console.log('************************************');
  console.log('Total number of cards:\t', board.cards.length);
  board.lists.forEach(list => {
    console.log('------------------------------');
    console.log('List:\t\t\t', list.name);
    let listCards = board.cards.filter(c => c.idList == list.id);
    console.log('Number of cards:\t', listCards.length);
    console.log('-------------');
    listCards.forEach(card => {
      console.log(`${card.name}, ${getCardLabels(card)}, ${card.shortUrl}`);
    });
    console.log('------------------------------');
  });
  
  console.log('************************************');
  
});



