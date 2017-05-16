/*
PROTOTYPES d'OBJETS
On trouvera parmi les objets :
- le joueur
- les bugs à affronter
- les persos
(- les objets ?)
*/

//prototype de joueur
function Joueur(pseudo) {
    this.pseudo = pseudo;
    this.tenacite = 10;
    this.competences = [15, 20, 5]; //respectivement html css et js dans un tableau
    this.outils = {
        gateau: false,
        debogueur: false,
        documentationHTML: false,
        documentationCSS: false,
        documentationJS: false,
    }
}

//prototype de bug
function Bug(nom) {
    this.nom = nom;

    //on va aléatoirement déterminer la nature du bug entre 3 choix possibles
    let typeBug = Math.round(Math.random() * 3 - 0.5);
    switch (typeBug) {
        case 0:
            this.nature = "html";
            break;
        case 1:
            this.nature = "css";
            break;
        case 2:
            this.nature = "js";
            break;
        default:
            alert('problème dans le typage du bug');
    }
    //ampleur de 10 minimum
    this.ampleur = Math.round(Math.random() * 51 + 9.5);
    this.efficaciteJoueur = 1; //devra tenir compte des compétences dans le type du bug (et un peu des autres), des conseils reçus, des outils présents et des tests réalisés
}



/*
ACTIONS
Le joueur peut faire 4 actions :
- laisser le bug tel quel (il ne se passe rien)
- utiliser un outil
- réaliser des tests dans différents langages
- modifier le fichier
*/
//action Joueur : ignorer le bug
let ignoreBug = function() {
    console.log("Ignore le bug");
    /*
    Doit quitter l'écran d'affrontement
    */
}


//action Joueur : utilisation d'un outil
let utiliseOutil = function(typeBug, ampleurBug, typeObjet, competencesJoueur, tenaciteJoueur) {
    console.log("utilise un objet");
    /*
    Si utilisation du gâteau : augmente la ténacité
    Si documentation : hausse de la compétence en fonction du type (à plafonner), ténacité baisse
    Si débugueur : indice pour identifier le type de bug, en fonction de l'ampleur
    */
}


//action Joueur : tests sur le fichier
let testTechnique = function(typeBug, ampleurBug, typeTest, competencesJoueur, efficaciteJoueur, tenaciteJoueur) {
    console.log("réalise des tests");
    /*
    en fonction du type de bug et du test tenté, cela va :
    - augmenter l'efficacité
    - augmenter légèrement les compétences en fonction de l'ampleur du bug
    - baisser la ténacité
    */
}


//action Joueur : modifications du fichier
let modifFichier = function(typeBug, ampleurBug, typeModif, competencesJoueur, efficaciteJoueur, tenaciteJoueur) {
    console.log("modifie le fichier");
    /*
    en fonciton du type du bug, du type de modif tenté, cela va :
    - réduire l'ampleur proportionnellement aux compétences et à l'efficacité
    - baisser la ténacité
    */
}