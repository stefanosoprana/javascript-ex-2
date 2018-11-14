// gioco dei dadi chi fa di più vince

// giocatore 1 tira il dado

var giocatore1 = Math.ceil(Math.random() * 6);

console.log(giocatore1);

// giocatore 2 tira il dado

var giocatore2 = Math.ceil(Math.random() * 6);

console.log(giocatore2);

// chi fa di più vince

if (giocatore1 > giocatore2) {
  console.log('giocatore 1 hai vinto!');
  document.getElementById('dadi_1').innerHTML =  'Hai fatto ' + giocatore1 + ' giocatore 1 hai vinto!';
  document.getElementById('dadi_2').innerHTML =  'Hai fatto ' + giocatore2 + ' giocatore 2 hai perso';
}

else if (giocatore2 > giocatore1) {
  console.log('giocatore 2 hai vinto!');
  document.getElementById('dadi_1').innerHTML = 'Hai fatto ' + giocatore2 + ' giocatore 2 hai vinto!' ;
  document.getElementById('dadi_2').innerHTML = 'Hai fatto ' + giocatore1 + ' giocatore 1 hai perso' ;
}

else {
  console.log('pareggio!');
  document.getElementById('dadi_1').innerHTML = 'Avete fatto ' + giocatore1 + ' pareggio!';
}
