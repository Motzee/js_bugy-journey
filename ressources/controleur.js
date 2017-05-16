//création d'un joueur
/*let pseudo = prompt("Entrez votre pseudo pour commencer la partie :") ;*/
let pseudo = "Maëlle";
let player = new Joueur(pseudo, 10, 15, 20, 5);
console.log(player);

//création d'un bug
let bug1 = new Bug("Report de bug 1", 40);
console.log(bug1);

//La lutte commence !
do {
    bug1['ampleur'] -= 10;
    player['tenacite'] -= 1;
    console.log("ténacité du joueur : " + player['tenacite'] + " et ampleur du bug : " + bug1['ampleur'])
} while (bug1['ampleur'] > 0 && player['tenacite'] > 0);

console.log(player);
console.log(bug1);

//evenement : au clic sur un bouton, déclanche sa fonction
let boutonTest = document.getElementById("boutonTest");
let boutonModif = document.getElementById("boutonModif");
let boutonOutil = document.getElementById("boutonOutil");
let boutonIgnore = document.getElementById("boutonIgnore");

boutonTest.addEventListener("click", function() {
    testTechnique();
});
boutonModif.addEventListener("click", function() {
    modifFichier();
});
boutonOutil.addEventListener("click", function() {
    utiliseOutil();
});
boutonIgnore.addEventListener("click", function() {
    ignoreBug();
});