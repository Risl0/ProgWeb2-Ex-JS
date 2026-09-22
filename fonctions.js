// 1) Ecrire une fonction qui retourne la plus grande valeur parmi les trois nombres fournis en paramètre.

function HighestVal(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

const max = HighestVal(1, 5, 2);
console.log(max);


// 3) Ecrire deux fonctions compareA et compareB qui retournent les mêmes résultats que dans les exemples suivant:
// compareA(4, '4'); // true 
// compareA(4.0, '4'); // true
// compareA(4, 'quatre'); // false

// compareB(8, '8'); // false
// compareB(8, 'huit'); // false

function compareA() {

}







// 4) En fonction d'un nombre n (ou n > 0) donné en paramètre, écrire une fonction qui affiche dans la console :
//  Les nombres entiers pairs compris entre 0 et n.
//  Les nombres entiers pairs et multiples de 7 compris entre 0 et n.
//  Les nombres entiers pairs et multiples de 3, ainsi que les nombres entiers multiple de 7 compris entre 0 et n.
//  Les nombres entiers pairs et multiples de 3, mais non multiples de 7 compris entre 0 et n.

