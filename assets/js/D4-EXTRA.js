console.log('__________________________________________________');
console.log('__________________________________________________');
console.log('EXTRA');
console.log(' ');

// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
  Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
  se il suo valore è maggiore di 5 o no.
  La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 1');

let number7 = 6;
const myArray2 = giveMeRandom(number7);

function checkArray(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    switch (true) {
      case arr[i] < 5:
        console.log(`${arr[i]} è minore di 5`);
        break;
      case arr[i] === 5:
        console.log(`${arr[i]} è uguale a 5`);
        break;
      case arr[i] > 5:
        console.log(`${arr[i]} è maggiore a 5`);
        counter += arr[i];
        break;
    }
  }
  return console.log(`La somma dei numeri maggiori di 5 è: ${counter}`);
}

checkArray(myArray2);

console.log('______________________________');

/* EXTRA 2
  Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
  Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 2');

// Array test
const shoppingCart = [
  {
    price: 5,
    name: 'penna',
    id: '001',
    quantity: 3,
  },
  {
    price: 50,
    name: 'tastiera',
    id: '002',
    quantity: 1,
  },
  {
    price: 300,
    name: 'monitor',
    id: '003',
    quantity: 1,
  },
  {
    price: 10,
    name: 'alimentatore',
    id: '004',
    quantity: 2,
  },
  {
    price: 3,
    name: 'gomma',
    id: '005',
    quantity: 1,
  },
  {
    price: 20,
    name: 'mouse',
    id: '006',
    quantity: 4,
  },
];

function shoppingCartTotal(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter += arr[i].price * arr[i].quantity;
  }
  return counter;
}

console.log(`Nel tuo carrello ci sono ${shoppingCart.length} oggetti`);
console.log(`Il totale del carrello è: €${shoppingCartTotal(shoppingCart)}`);

console.log('______________________________');

/* EXTRA 3
  Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
  Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 3');

const newItem = {
  price: 30,
  name: 'cuffie',
  id: '007',
  quantity: 1,
};

function addToShoppingCart(item) {
  shoppingCart.push(item);
  return shoppingCart.length;
}

console.log(
  `Nel tuo carrello adesso ci sono ${addToShoppingCart(newItem)} oggetti`
);
console.log('______________________________');

/* EXTRA 4
  Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
  Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 4');

function maxShoppingCart(cart) {
  const maxItem = { price: 0, name: '', id: '', quantity: 0 };
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].price > maxItem.price) {
      for (let key in cart[i]) {
        maxItem[key] = cart[i][key];
      }
    }
  }
  return maxItem;
}

const maxCartItem = maxShoppingCart(shoppingCart);

console.log(`L'oggetto più caro nel carrello è:`);
console.log(maxCartItem);

console.log('______________________________');

/* EXTRA 5
  Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
  Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 5');

function latestShoppingCart(arr) {
  return arr[arr.length - 1];
}

console.log(`L'ultimo oggetto inserito nel carrello è:`);
console.log(latestShoppingCart(shoppingCart));

console.log('______________________________');

/* EXTRA 6
  Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
  La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 6');

let number8 = 6;

function loopUntil(x) {
  let counter = 0;
  const myArr = [];
  while (counter < 3) {
    myArr.push(Math.floor(Math.random() * 10));
    if (myArr[myArr.length - 1] > x) {
      counter++;
    }
  }
  return console.log(myArr);
}

loopUntil(number8);

console.log('______________________________');

/* EXTRA 7
  Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 7');

const myArray3 = [1, 2, 3, 4, 5, 6, 7, 'a', 'b', 8, 9, 'c', 10];

function sum(arr) {
  let mySum = 0;
  for (let i = 0; i < arr.length; i++) {
    mySum += arr[i];
  }
  return mySum;
}

function checkNumb(arr) {
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      myArr.push(arr[i]);
    }
  }
  return myArr;
}

function average(arr) {
  const numArr = checkNumb(arr);
  let mySum = sum(numArr);
  return mySum / numArr.length;
}

console.log(myArray3);
console.log(
  "La media aritmetica dei numeri contenuti nell'array precedente è:"
);
console.log(average(myArray3));

console.log('______________________________');

/* EXTRA 8
  Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 8');

const myArray4 = ['Nel', 'mezzo', 'del', 'cammin', 'di', 'nostra', 'vita'];

function longest(arr) {
  let leng = 0;
  let word = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > leng) {
      word = arr[i];
      leng = arr[i].length;
    }
  }

  console.log(
    `La parola più lunga è ${word} ed è composta da ${leng} caratteri`
  );
  return;
}

longest(myArray4);

console.log('______________________________');

/* EXTRA 9
  Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
  La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 9');

let emailContent = 'Nel mezzo del cammin di nostra vita';

function spamDetector(str) {
  let check = Math.max(str.indexOf('SPAM'), str.indexOf('SCAM'));
  if (check < 0) {
    return true;
  } else {
    return false;
  }
}

console.log(spamDetector(emailContent));

console.log('______________________________');

/* EXTRA 10
  Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 10');

let selectedDay = '2024.11.1';

function daysPassed(day) {
  const myDay = new Date(day);
  const today = new Date();

  let delta = Math.floor((today - myDay) / 1000 / 60 / 60 / 24);

  return delta;
}

console.log(daysPassed(selectedDay));

console.log('______________________________');

/* EXTRA 11
  Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
  Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
  Es.: x = 3, y = 2
  ["00","01","02"
  "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
