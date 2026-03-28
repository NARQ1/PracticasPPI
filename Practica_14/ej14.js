const inventario = [
  {
    id: 1,
    name: "TORT1K",
    description: "1K de tortilla",
    price: 20,
    stock: 2,
    maxStock: 12,
    restock: "2d",
  },
  {
    id: 2,
    name: "KLGSFL",
    description: "Froot loops caja",
    price: 40,
    stock: 5,
    maxStock: 6,
    restock: "1w",
  },
  {
    id: 3,
    name: "BRCHIP",
    description: "Chips variado",
    price: 18,
    stock: 9,
    maxStock: 12,
    restock: "2w",
  },
  {
    id: 4,
    name: "SRJL1L",
    description: "1L Leche sello rojo",
    price: 25,
    stock: 2,
    maxStock: 12,
    restock: "2w",
  },
  {
    id: 5,
    name: "GLPH1K",
    description: "1k Huevo guadalupana",
    price: 45,
    stock: 6,
    maxStock: 30,
    restock: "2w",
  },
  {
    id: 6,
    name: "FJPR1K",
    description: "1K frijol peruano",
    price: 40,
    stock: 0,
    maxStock: 10,
    restock: "1w",
  },
  {
    id: 7,
    name: "CSTCHJ",
    description: "Lata de chiles jalapeños la costeña",
    price: 12,
    stock: 12,
    maxStock: 12,
    restock: "1w",
  },
];

// Darle a las variables el valor que se solicita encima de ellas.
// Se comentó la respuesta que les debería otorgar cada una para que comprueben.

//FILTER AND MAP
//1.-Mostrar la description de los productos sin stock
//['1K frijol peruano']
let sinStock = inventario.filter(i => i.stock==0).map(i => i.description);
//2.-Mostrar la description de los productos con un stock menor a 5
//['1K de tortilla', '1L Leche sello rojo', '1K frijol peruano']
let bajoStock = inventario.filter(i => i.stock<5).map(i => i.description);
//3.-Mostrar el name de los productos cuyo restock es cada semana = "1w"
// ['KLGSFL', 'FJPR1K', 'CSTCHJ']
let weeklyRestock;
//4.-Mostrar el name de los productos cuyo restock no es cada semana = "1w"
//['TORT1K', 'BRCHIP', 'SRJL1L', 'GLPH1K']
let notWeeklyRestock;
//5.-Mostrar el id de los productos que tienen un stock máximo mayor a 15 y un precio mayor a 30
//[5]
let mostValuableProduct;
//EVERY
//6.-Todos los productos tienen por lo menos un producto en stock?
//false
let inventoryHasStock;
//7.-Todos los productos tienen un precio mayor a 10?
//true
let everythingPricy;
//SOME
//8.-Algún producto tiene el stock completo?
//true
let anyFullStock;
//9.-Algún producto tiene el stock en 0?
//true
let anyEmptyStock;
//REDUCE
/*10.-Iniciando el acumulador en -1 calcular cuanto dinero se ha vendido en total de todo el inventario,
si un producto tiene 10 de stock maximo y 8 de stock significa que vendió 2.
El resultado sería el valor del producto*2-1 por el inicio del acumulador.*/
//2023
let moneyEarned = inventario.reduce((acc,prod) => 
    (acc += prod.price * (prod.maxStock - prod.stock)),-1);
