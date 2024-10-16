const readline = require('readline');

// Créer une interface pour la lecture des entrées
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Demander à l'utilisateur de saisir une phrase
rl.question('Veuillez entrer une phrase (se terminant par un point) : ', (phrase) => {
    // Vérification que la phrase se termine par un point
    if (!phrase.endsWith('.')) {
        console.log('La phrase doit se terminer par un point.');
        rl.close();
        return;
    }

    // Initialisation des compteurs
    let longueurPhrase = 0;
    let nombreMots = 0;
    let nombreVoyelles = 0;

    // Traitement de la phrase caractère par caractère
    for (let caractere of phrase) {
        // Compter la longueur (tous les caractères)
        longueurPhrase++;

        // Vérifier si le caractère est une voyelle
        if ('aeiouyAEIOUY'.includes(caractere)) {
            nombreVoyelles++;
        }
    }

    // Compter le nombre de mots
    // On divise la phrase par les espaces
    nombreMots = phrase.trim().split(/\s+/).length - 1; // Soustraction de 1 pour le point final

    // Affichage des résultats
    console.log(`Longueur de la phrase : ${longueurPhrase}`);
    console.log(`Nombre de mots : ${nombreMots}`);
    console.log(`Nombre de voyelles : ${nombreVoyelles}`);

    // Fermer l'interface
    rl.close();
});
