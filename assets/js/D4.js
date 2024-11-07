/* ESERCIZIO 1
  Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 1');

let l1 = 10;
let l2 = 12;

function area(num1, num2) {
  return num1 * num2;
}

console.log(`L'area del rettangolo di lati ${l1} e ${l2} è: ${area(l1, l2)}`);

console.log('------------------------------');

/* ESERCIZIO 2
  Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
  La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
  la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 2');

let number1 = 10;
let number2 = 5;

function crazySum(num1, num2) {
  let sum = num1 + num2;
  if (num1 === num2) {
    return sum * 3;
  } else {
    return sum;
  }
}

console.log(crazySum(number1, number2));

console.log('------------------------------');

/* ESERCIZIO 3
  Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
  Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 3');

let number3 = 10;

function crazyDiff(num) {
  let diff = num - 19;
  return Math.abs(diff);
}

console.log(crazyDiff(number3));

console.log('------------------------------');

/* ESERCIZIO 4
  Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
  se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 4');

let number4 = 70;

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(number4));

console.log('------------------------------');

/* ESERCIZIO 5
  Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
  La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
  ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 5');

let myString = 'ciao';

function epify(str) {
  if (str.slice(0, 7) === 'EPICODE') {
    return str;
  } else {
    let myNewString = 'EPICODE' + myString;
    return myNewString;
  }
}

console.log(epify(myString));

console.log('------------------------------');

/* ESERCIZIO 6
  Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
  di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 6');

let number5 = 10;

function check3and7(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(check3and7(number5));

console.log('------------------------------');

/* ESERCIZIO 7
  Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 7');

let myString2 = 'EPICODE';

function reverseString(str) {
  str = str.split('');
  str = str.reverse();
  str = str.join('');
  return str;
}

console.log(reverseString(myString2));

console.log('------------------------------');

/* ESERCIZIO 8
  Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
  La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 8');

let myString3 = 'Nel mezzo del cammin di nostra vita';

function upperFirst(str) {
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
  }
  str = str.join(' ');
  return str;
}

console.log(upperFirst(myString3));

console.log('------------------------------');

/* ESERCIZIO 9
  Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
  della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 9');

let myString4 = 'topolino';

function cutString(str) {
  str = str.slice(1, str.length - 1);
  return str;
}

console.log(cutString(myString4));

console.log('------------------------------');

/* ESERCIZIO 10
  Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 10');

let number6 = 20;
let myArray = [];

function giveMeRandom(n) {
  const myNewArray = [];
  for (let i = 0; i < number6; i++) {
    let randomNumber = Math.floor(Math.random() * 11);
    myNewArray.push(randomNumber);
  }
  return myNewArray;
}

myArray = giveMeRandom(number6);
console.log(myArray);

console.log('------------------------------');
