// Tableaux de nombres
//À partir du tableau de nombres suivant :
//const numbers = Object.freeze([3, 14, 15, 92 ,65, 35, 89, 79, 32, 38]);
//Réalisez les fonctionnalités ci-dessous. La structure de données initiale ne doit pas être modifiée (structure immutable). Utilisez des méthodes qui retournent un nouveau tableau, comme toSorted, plutôt que des méthodes qui modifient le tableau d'origine, comme sort. Vos solutions doivent rester fonctionnelles même si le contenu du tableau initial diffère.

//1. Afficher tous les nombres dans la console

//2. Retourner un tableau avec les valeurs doublées

//3. Retourner un tableau ne contenant que les valeurs impaires

//4. Retourner un tableau ne contenant pas le premier élément

//5. Retourner un tableau ne contenant pas le dernier élément

//6. Retourner la somme des nombres

//7. Retourner le plus grand nombre

//8. Indiquer si le tableau contient au moins un nombre multiple de 9

//9. Indiquer si le tableau ne contient que des nombres positifs

//10. Retourner un tableau contenant d'abord les nombres pairs, puis les nombres impairs, en conservant leur ordre relatif dans chaque groupe




// Tableaux de chaînes de caractères
//À partir du tableau de mots suivant :
//const strings = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);
//Réalisez les fonctionnalités ci-dessous. La structure de données initiale ne doit pas être modifiée.

//1. Retourner tous les mots contenant au moins un r

//2. Indiquer si tous les mots font 5 lettres

//3. Retourner un nouveau tableau contenant le mot Lorem au début, suivi des mots du tableau initial

//4. Retourner un nouveau tableau contenant les mots du tableau initial, suivis du mot Ipsum

//5. Retourner un tableau en remplaçant le mot du milieu par le mot radar (si le tableau a un nombre de mots pair, remplacer le mot situé à l'indice juste avant le milieu)

//6. Retourner la concaténation de tous les mots

//7. Retourner le mot qui vient en premier selon l'ordre alphabétique, sans modifier le tableau initial (localeCompare et toSorted peuvent être utiles)

//8. Concaténer les chaînes dans l'ordre de leurs indices, convertir le résultat en minuscules, puis indiquer s'il forme un palindrome, c'est-à-dire s'il se lit de la même manière dans les deux sens




// Tableaux d'objets : jeu de cartes
//Nous allons créer un jeu de 52 cartes: 13 valeurs pour chacune des quatre couleurs.Chaque carte possède un rang numérique, de 2 à 14. Le valet vaut 11, la dame 12, le roi 13 et l'as 14. Les rangs sont donc classés de la plus faible à la plus forte valeur.

const JACK = 11;
const QUEEN = 12;
const KING = 13;
const ACE = 14;

const RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, JACK, QUEEN, KING, ACE];
const SUITS = ['hearts', 'spades', 'clubs', 'diamonds'];

//1. Proposer une structure d'objet pour représenter une carte (son rang numérique et sa couleur), ainsi qu'une structure pour représenter le paquet entier.

//2. Écrire une fonction buildBaseDeck qui construit et retourne un paquet de 52 cartes classiques à partir de RANKS et SUITS.

//3. Écrire une fonction shuffleInPlace qui mélange le tableau de cartes reçu selon la version moderne de l'algorithme de Fisher–Yates : pour chaque indice i, du dernier jusqu'à 1, échanger l'élément d'indice i avec un élément d'indice aléatoire j compris entre 0 et i.

//4. Écrire une fonction drawCards qui reçoit un paquet et un nombre de cartes, copie le paquet, mélange cette copie et retourne le nombre de cartes demandé.Le paquet reçu par drawCards ne doit pas être modifié.

//5. Écrire une fonction compareRank qui reçoit deux cartes et compare uniquement leurs rangs numériques.Elle retourne un nombre négatif si la première est plus faible, zéro si les deux rangs sont égaux, ou un nombre positif si la première est plus forte.Tirer deux cartes et utiliser cette fonction pour annoncer la plus forte, ou une égalité.

//6. Utiliser drawCards pour obtenir une main de cinq cartes distinctes.Écrire une fonction getHighestCard qui parcourt cette main et retourne la carte de plus forte valeur.Si plusieurs cartes ont ce rang, la première sera retournée.

//7. Écrire une fonction displayRank qui retourne les rangs de 2 à 10 sous forme de texte et remplace 11, 12, 13 et 14 par J, Q, K et A respectivement.Écrire ensuite une fonction showCard qui affiche une carte dans le terminal avec son rang et le symbole Unicode de sa couleur(♥, ♠, ♣ ou ♦).Les cœurs et carreaux doivent apparaître en rouge, les piques et trèfles en noir, sur fond blanc pour rester lisibles dans tous les thèmes du terminal.Voici un exemple à essayer avec Node.js :

//const red = '\x1b[31;47m';
//const black = '\x1b[30;47m';
//const defaultColor = '\x1b[0m';
//const label1 = 'A♥';
//const label2 = 'A♠';

//console.log(red + label1 + defaultColor);
//console.log(black + label2 + defaultColor);

//Utiliser showCard pour afficher les cartes de la main de cinq cartes et rétablir la couleur normale après chaque carte.
