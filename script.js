console.log('Hello!');

/* metodo1 */
// funcion: simulacion consulta de producto.
function consultProducts() {
  const myPromise = new Promise((resolve, reject) => {
    const products = [
      { id: 1, name: 'carne', price: 1290 },
      { id: 1, name: 'pescado', price: 1450 },
      { id: 1, name: 'pan', price: 1200 },
      { id: 1, name: 'queso', price: 2100 },
    ];
    setTimeout(() => {
      // mostrar los productos despues de 3s
      resolve(products);
    }, 3000);
  });
  return myPromise;
  // console.log(myPromise);
}
consultProducts().then((res) => console.log(res));
// guardar la respuesta en mi estado del componente

/* metodo2 */
const productsArray = ['perro', 'gato', 'conejo', 'pato'];
// funcion
const getProducts = () => {
  return new Promise((resolve, reject) => {
    // mostrar productos 3s despues
    setTimeout(() => {
      resolve(productsArray);
    }, 3000);
  });
};

// llamada a la funcion
getProducts()
  .then((res) => {
    console.log(res); // mostrar el array
  })
  .catch((err) => console.log(err));

// array
const array = [1, 2, 3, 4, 5, 6].map((m) => m * m);
console.log(array);
