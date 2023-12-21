function afficherContenu(numContenu) { /*Déclaration de la fonction */
    masquerTousLesContenus(); /* Masquer contenue */
    var contenu = document.getElementById('CV' + numContenu); /* Sélectionne le contenu correspondant à numContenu */
    contenu.style.display = 'block';  /* Affiche le contenu sélectionné */

    if (numContenu === 1) { /* Vérifie si le numéro de contenu est égal à 1 */
        document.body.style.background = "url('https://img.freepik.com/vecteurs-libre/code-binaire-style-matriciel-nombres-tombants-numeriques-fond-bleu_1017-37387.jpg?w=996&t=st=1702728121~exp=1702728721~hmac=43278f88d23ed28cd9fcc9f1425413f1d73c1f26969256296363b7f7248e859c')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
    /* Changer le style du background du contenu 1, la taille pour qu'elle remplisse toutes la page et no repeat pour qu'il y ait 1 seul image */
    } else if (numContenu === 2) {
        document.body.style.background = "url('https://c.wallhere.com/photos/e8/e8/space_Earth_artwork_stars_supermassive_black_hole_planet_galaxy-1815637.jpg!d')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
    }
    /* Changer le style du background du contenu 2, la taille pour qu'elle remplisse toutes la page et no repeat pour qu'il y ait 1 seul image */
}

function masquerTousLesContenus() { /* Masquer contenu */
    var contenus = document.querySelectorAll('[id^=CV]'); /* Sélectionne les contenus qui commence par CV */
    contenus.forEach(function(contenu) { /* for each = pour chaque contenu */
        contenu.style.display = 'none'; /* Masque l'élément */
    });
}



/* Bouton Coordonnées */

/* Variable contenant les coordonnées d'origines */
var coordonneesOriginales = [  
    "06.81.43.87.98",
    "ensomike3@gmail.com",
    "23 Rue de Rivoli, Paris"
];

var ulElementCoordonnees = document.getElementById('coordonneesListe'); /* Sélectionne la liste avec son id */
var modifieCoordonnees = false; /* false car coordonnées originale (pas modifié) */

function changerContenuCoordonnees() { /* changer contenu */
    var contenu = modifieCoordonnees ? coordonneesOriginales : ["04.34.23.87.94", "mikeydev@mac.com", "27 Rue Menninga, Paris"]; /* modifier interieur contenu */
    ulElementCoordonnees.innerHTML = ""; /* Efface le contenu originale de la liste */

    contenu.forEach(function(element) { /* pour chaque élément */
        var li = document.createElement("li"); /* on crée un nouvel élément */
        li.textContent = element; /* Ajout du texte du nouvel élément */
        ulElementCoordonnees.appendChild(li); /* Ajoute l'élément dans la nouvelle liste */
    });

    modifieCoordonnees = !modifieCoordonnees; /* inversion booléennes (true/false) efféctuer selon si c'est modifieCoordonnes ou !modifieCoordonnees */
}

/* Bouton Langues */

var languesOriginales = [
    "Anglais",
    "Francais",
    "Espagnol"
];

var ulElementLangues = document.getElementById('languesListe');
var modifieLangues = false;

function changerContenuLangues() {
    var contenu = modifieLangues ? languesOriginales : ["Chinois", "Arabes", "Japonais"];
    ulElementLangues.innerHTML = "";

    contenu.forEach(function(element) {
        var li = document.createElement("li");
        li.textContent = element;
        ulElementLangues.appendChild(li);
    });

    modifieLangues = !modifieLangues;
}

/* Bouton SoftSkills */

var softskillsOriginales = [
    "Autonome",
    "Polyvalent",
    "Tosa Python 3",
    "HTML",
    "CSS"
];

var ulElementSoftskills = document.getElementById('softskillsListe');
var modifieSoftskills = false;

function changerContenuSoftskills() {
    var contenu = modifieSoftskills? softskillsOriginales : ["Facilité d'adaptation", "Fléxibilité", "C,C++","SQL","PHP"];
    ulElementSoftskills.innerHTML = "";

    contenu.forEach(function(element) {
        var li = document.createElement("li");
        li.textContent = element;
        ulElementSoftskills.appendChild(li);
    });

    modifieSoftskills = !modifieSoftskills;
}

/* Afficher & Masquer */

function premiereListe() { 
    var liste = document.getElementById('expproListe'); 
    liste.style.display = (liste.style.display === 'none') ? 'block' : 'none'; 
}

function deuxiemeListe() { 
    var liste = document.getElementById('parcoursacaListe'); 
    liste.style.display = (liste.style.display === 'none') ? 'block' : 'none'; 
}

function troisiemeListe() { 
    var liste = document.getElementById('stagesListe'); 
    liste.style.display = (liste.style.display === 'none') ? 'block' : 'none'; 
}

function quatriemeListe() { 
    var liste = document.getElementById('hobbiesListe'); 
    liste.style.display = (liste.style.display === 'none') ? 'block' : 'none'; 
}