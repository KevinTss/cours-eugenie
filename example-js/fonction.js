function coucou(param1) {
  return 'coucou' + param1;
}
const myFunction = function () {
  // console.log('COUCOU');
  return coucou('hello');
};

const nb1 = 4;
const nb2 = 7;

// const result = myFunction();
// console.log('resultat = ', result);

// console.log('++1', nb1);
// console.log('++2', typeof nb1);
// console.log('++3', myFunction);
// console.log('++4', typeof myFunction);
console.log('++5', myFunction());
// console.log('++6', typeof myFunction());
