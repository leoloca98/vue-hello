/*

|Descrizione:
Inizializzare Vue e stampare a schermo un messaggio all’interno di un h1,
utilizzando le properietà di Vue presenti in data.
*Bonus
Aggiungere alla pagina un’immagine, la cui sorgente derivi anch'essa dai data di Vue.
#POST BONUS:
- Chi non lo ha già fatto, recuperi e completi gli esercizi precedenti
- Chi invece è in regola con la consegna degli esercizi può sperimentare,
  in file separato, tutto quello che abbiamo visto oggi!

*/

console.log("Vue is here", Vue);

Vue.config.devtools = true;  //*FONDAMENTALE SE NO NON VA IL TOOL

const root = new Vue({
    el: "#root",
    data: {
        name: "Leonardo Locatelli",
        img: "https://picsum.photos/id/237/200/300",
    },
});