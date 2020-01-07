var emailUtentiRegistrati = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "minnie@gmail.com"];


document.getElementById('entra').addEventListener ("click",
function(){
    var emailUtente = document.getElementById('email').value;
    var trovato = false;
    // Controlla se la mail inserita nel form è uguale a una di quelle nell'Array
    // Se è uguale aggiorna la variabile "trovato"
    for (var i = 0; i < emailUtentiRegistrati.length; i++) {
      if (emailUtente == emailUtentiRegistrati[i]) {
        trovato = true;
      }
    }

    if (trovato == true) {
      document.getElementById('risposta').innerHTML = "Puoi accedere all'area privata! 👍";
    } else {
      document.getElementById('risposta').innerHTML = "Devi registrarti per accedere! 😈";
    }
 });
