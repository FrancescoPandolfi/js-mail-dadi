
var dadoUtente = Math.floor(Math.random() * 6) + 1;
console.log(dadoUtente);
var dadoComputer = Math.floor(Math.random() * 6) + 1;
console.log(dadoComputer);

if (dadoUtente > dadoComputer) {
  console.log("Hai vinto");
} else if (dadoUtente < dadoComputer){
  console.log("Hai perso");
} else {
  console.log("Pari");
}
