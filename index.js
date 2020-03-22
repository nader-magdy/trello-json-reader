const argv = require('yargs').argv;

console.log(process.argv.slice(2));

let boards = Array.isArray(argv.board) ? argv.board : [argv.board];

console.log(boards);
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

    if(argv.labelsSummary){
      board.labels.forEach(l => {
        console.log(`${l.name} -> number of cards:\t  ${listCards.filter(c => c.idLabels.indexOf(l.id) > -1).length}`);
      });
    }
    console.log('-------------');
    if (argv.showCards) {
      listCards.forEach(card => {
        console.log(`${card.name}, ${getCardLabels(card)}, ${card.shortUrl}`);
      });
      console.log('------------------------------');
    }
  });

  console.log('************************************');

});



