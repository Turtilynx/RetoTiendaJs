
//cantidad de precio de pantalones

const precioPantalon = 30;
let cantidadPantalones = 2;
console.log(precioPantalon);

const precioCamiseta = 15;
let cantidadCamiseta = 1;
console.log(precioCamiseta);

const precio = (precioPantalon * cantidadPantalones) + (precioCamiseta * cantidadCamiseta);
console.log(precio);

document.getElementById("total").textContent = precio;

//gastos de envío

const gastosDeEnvio = 5;
console.log(gastosDeEnvio);

//Precio total

const totalConEnvio = precio + gastosDeEnvio;
console.log(totalConEnvio);

document.getElementById("totalConEnvio").textContent = totalConEnvio;

//cantidad total

const cantidadTotal = cantidadPantalones + cantidadCamiseta;
console.log(cantidadTotal);

//descuento

const descuento = precio > 100 || cantidadTotal > 3;
console.log(descuento);

document.getElementById("descuento").textContent = descuento;

//descuento adicional 

let HoyEsViernes = true;
console.log(HoyEsViernes);

let fidelidad = true;
console.log(fidelidad);

let descuentoAdicional = HoyEsViernes && fidelidad;
console.log(descuentoAdicional);

document.getElementById("descuentoAdicional").textContent = descuentoAdicional;
