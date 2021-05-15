function direBonjour() {
  console.log('Bonjour, Eugenie');
  return 'coucou';
}

var direBonjour2 = function () {
  console.log('Bonjour, Eugenie2');
};

// console.log('++1', typeof direBonjour);
// console.log('++2', typeof direBonjour());

function arrondirChiffre(chiffre) {
  return Math.round(chiffre);
}

function addition(nb1, nb2) {
  return nb1 + nb2;
}

console.log('--1', 3.33);
console.log('--2', arrondirChiffre(3.33));

console.log('**1', addition(4.44, 7.77));
console.log('**2', addition(arrondirChiffre(4.44), arrondirChiffre(7.77)));
