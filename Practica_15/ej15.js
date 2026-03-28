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
		maxStock: 12,
		restock: "2w",
	},
	{
		id: 4,
		name: "SRJL1L",
		description: "1L Leche sello rojo",
		price: 25,
		maxStock: 12,
		restock: "2w",
	},
	{
		id: 5,
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

//Hacer que la función printData regrese los siguientes mensajes al ser llamada con los siguientes parámetros:
//printData(inventario[0])='El producto 1K de tortilla de costo $20 tiene un id 1'
//printData(inventario[3])='El producto 1L Leche sello rojo de costo $25 tiene un id 4'
//printData(inventario[6])='El producto Lata de chiles jalapeños la costeña de costo $12 tiene un id 7'
function printData(/*Agregar código*/) {
	return `El producto ${miproducto} de costo $${costo} tiene un id ${identificador}`;
}

//Hacer que la función printTodo regrese lo siguiente al ser llamada como:printTodo(inventario)
/*
El producto TORT1K tiene un stock de 2/12
El producto KLGSFL tiene un stock de 5/6
El producto BRCHIP tiene un stock de 0/12
El producto SRJL1L tiene un stock de 0/12
El producto NONAME tiene un stock de 6/30
El producto FJPR1K tiene un stock de 0/10
El producto CSTCHJ tiene un stock de 12/12
*/
//Revisar que no tenga datos undefined, el for a usar es aquel que sirve con objetos.
function printTodo(inventory) {
	for (/*Agregar código*/) {
		/*Agregar código*/
		console.log(`El producto ${nombre} tiene un stock de ${disp}/${max}`);
	}
}
