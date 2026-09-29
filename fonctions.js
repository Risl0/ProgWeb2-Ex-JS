// 1) Ecrire une fonction qui retourne la plus grande valeur parmi les trois nombres fournis en paramètre.

function HighestVal(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

const max = HighestVal(1, 5, 2);
console.log("1, 5, 2 => " + max);

// 2) Ecrire une fonction qui retourne un nombre entier pseudo-aléatoire entre une borne inférieure et une borne supérieure (bornes entières et comprises dans l'intervalle).

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {
    console.log(getRandomInt(1, 6));
}

// 3) Ecrire deux fonctions compareA et compareB qui retournent les mêmes résultats que dans les exemples suivant:
// compareA(4, '4'); // true 
// compareA(4.0, '4'); // true
// compareA(4, 'quatre'); // false

// compareB(8, '8'); // false
// compareB(8, 'huit'); // false


function compareA(a, b) {
    return a == b;
}

function compareB(a, b) {
    return a === b;
}

console.log(compareA(4, '4'));      // true
console.log(compareA(4.0, '4'));    // true
console.log(compareA(4, 'quatre')); // false

console.log(compareB(8, '8'));       // false
console.log(compareB(8, 'huit'));    // false



// 4) En fonction d'un nombre n (ou n > 0) donné en paramètre, écrire une fonction qui affiche dans la console :
//  Les nombres entiers pairs compris entre 0 et n.
//  Les nombres entiers pairs et multiples de 7 compris entre 0 et n.
//  Les nombres entiers pairs et multiples de 3, ainsi que les nombres entiers multiple de 7 compris entre 0 et n.
//  Les nombres entiers pairs et multiples de 3, mais non multiples de 7 compris entre 0 et n.

function displayNumbers(n) {
    console.log("1) Nombres pairs entre 0 et n :");
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

    console.log("2) Nombres pairs et multiples de 7 :");
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0 && i % 7 === 0) {
            console.log(i);
        }
    }

    console.log("3) Nombres pairs et multiples de 3, OU multiples de 7 :");
    for (let i = 0; i <= n; i++) {
        if ((i % 2 === 0 && i % 3 === 0) || i % 7 === 0) {
            console.log(i);
        }
    }

    console.log("4) Nombres pairs et multiples de 3, mais PAS multiples de 7 :");
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 7 !== 0) {
            console.log(i);
        }
    }
}


// 5) Ecrire deux fonctions retournant réciproquement:

// le nombre de piles obtenus sur un lancé de n pièces de monnaies simulées par l'utilisation du générateur de nombre aléatoire.
// le nombre de piles et de faces obtenus sur un lancé de n pièces de monnaies simulées par l'utilisation du générateur de nombre aléatoire.

function countHeads(n) {
    let heads = 0;
    for (let i = 0; i < n; i++) {
        // Math.random() < 0.5 donne 50% de chance
        if (Math.random() < 0.5) {
            heads++;
        }
    }
    return heads;
}

function countHeadsAndTails(n) {
    let heads = 0;
    let tails = 0;
    for (let i = 0; i < n; i++) {
        if (Math.random() < 0.5) {
            heads++;
        } else {
            tails++;
        }
    }
    return { heads, tails };
}


// 6) Ecrire une fonction qui indique si un nombre entier est un nombre premier ou non. Tester la fonction avec les valeurs suivantes: 0, 1, 2, 3, 4, 9, 11, 26, 87178291197, 87178291199.

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    // On teste seulement jusqu'à √num pour optimiser
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// Tests :
console.log(isPrime(0));           // false
console.log(isPrime(1));           // false
console.log(isPrime(2));           // true
console.log(isPrime(3));           // true
console.log(isPrime(4));           // false
console.log(isPrime(9));           // false
console.log(isPrime(11));          // true
console.log(isPrime(26));          // false
console.log(isPrime(87178291197)); // false
console.log(isPrime(87178291199)); // true


// 7) Ecrire une fonction nommée cl qui affiche dans la console, ligne après ligne, toutes les données fournies en paramètre. Exemple d'appel:
// cl(1, 2 ,"a", [3.1, 4, 159]);

function cl(...args) {
    for (let arg of args) {
        console.log(arg);
    }
}

// Exemple :
cl(1, 2, "a", [3.1, 4, 159]);
// Affiche chaque élément sur une ligne séparée


//8) Écrire deux fonctions :

//double, qui retourne le double du nombre reçu ;
//square, qui retourne le carré du nombre reçu.

// Écrire ensuite une fonction transform qui reçoit un nombre et une fonction en paramètres. Elle doit appliquer la fonction reçue au nombre, puis retourner le résultat.
//transform(5, double); // Returns 10
//transform(5, square); // Returns 25

function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

function transform(number, func) {
    return func(number);
}

// Tests :
transform(5, double);  // 10
transform(5, square);  // 25


// 9) Écrire une fonction repeatTransform qui reçoit un nombre, une fonction et un nombre de répétitions en paramètres. Elle doit appliquer la fonction au nombre, puis appliquer à nouveau cette même fonction au résultat obtenu, autant de fois que demandé. Elle retourne le résultat final.

//repeatTransform(2, double, 3); // Returns 16: 2 → 4 → 8 → 16
//repeatTransform(2, square, 2); // Returns 16: 2 → 4 → 16

function repeatTransform(number, func, repetitions) {
    let result = number;
    for (let i = 0; i < repetitions; i++) {
        result = func(result);
    }
    return result;
}

// Tests :
repeatTransform(2, double, 3);  // 2 → 4 → 8 → 16 = 16
repeatTransform(2, square, 2);  // 2 → 4 → 16 = 16



// 10) Écrire une fonction createGreeting qui reçoit une formule de salutation et retourne une nouvelle fonction. La fonction retournée reçoit un prénom et retourne le message complet.

//const sayHello = createGreeting('Hello');
//const sayWelcome = createGreeting('Welcome');

//sayHello('Ada');     // Returns "Hello Ada !"
//sayWelcome('Linus'); // Returns "Welcome Linus !"

function createGreeting(greeting) {
    return function (firstName) {
        return `${greeting} ${firstName} !`;
    };
}

// Utilisation :
const sayHello = createGreeting('Hello');
const sayWelcome = createGreeting('Welcome');

sayHello('Ada');     // "Hello Ada !"
sayWelcome('Linus'); // "Welcome Linus !"  