// chiedi all'utente la Email
// controlla che sia nella lista di chi puo accedere
// stampa un messaggio appropriato

var email_utente = prompt('inserisci la mail');

console.log(email_utente);

var frase_accesso = "email corretta";

var email_corrette = ['mario@gmail.com', 'paolo@gmail.com', 'carlo@yahoo.com']

console.log(email_corrette);

for (var i = 0; i < email_corrette.length; i++) {
  console.log(email_corrette[i]);
  if ((email_corrette[i]) == email_utente) {
    console.log(frase_accesso);
    document.getElementById('email').innerHTML = frase_accesso;
  }
  else {
    document.getElementById('email').innerHTML = 'email errata';
    console.log('accesso negato');
  }
}



// if ((email_corrette[0]) == email_utente) {
//   document.getElementById('email').innerHTML = frase_accesso;
// }
//
// else if ((email_corrette[1]) == email_utente) {
//   document.getElementById('email').innerHTML = frase_accesso;
// }
//
// else if ((email_corrette[2]) == email_utente) {
//   document.getElementById('email').innerHTML = frase_accesso;
// }
//
