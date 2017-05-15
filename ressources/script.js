/*Déplacement du personnage sur la carte grâce aux flêches du clavier (en vérité, c'est la carte qui bouge...) */
//(source : https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent/key)
window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
        return; // Should do nothing if the key event was already consumed.
    }

    //si une flèche est pressée, on déplace la carte
    switch (event.key) {
        case "ArrowDown":
            carteMonte();
            break;
        case "ArrowUp":
            carteDescend();
            break;
        case "ArrowLeft":
            carteToDroite();
            break;
        case "ArrowRight":
            carteToGauche();
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }

    // Consume the event for suppressing "double action".
    event.preventDefault();
}, true);


/*MODELE de fonctions */

//fonctions de déplacement de la carte (attention : le mouvement de la carte est inversé par rapport au mouvement du personnage)
let cartePosition = document.getElementById("map");


function carteMonte() {
    console.log("Le fond monte puisqu'on descend");
}

function carteDescend() {
    console.log("Le fond descend puisqu'on monte");
}

function carteToDroite() {
    console.log("Le fond va à droite puisqu'on va à gauche");
}

function carteToGauche() {
    console.log("Le fond va à gauche puisqu'on va à droite");
}