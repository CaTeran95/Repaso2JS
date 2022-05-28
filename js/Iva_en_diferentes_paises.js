function asignacionDeIva (pais) {
    switch (pais) {
        case "Argentina":
            return (a) => a * 1.21;
        case "Colombia":
            return (a) => a * 1.19;
        case "Mexico":
            return (a) => a * 1.16;
    }
}

let pais = prompt("Ingresa el país de la compra: ");
let precioDelProducto = prompt("Ingresa el precio del producto: ");

let ivaEnElPaisDeLaCompra = asignacionDeIva(pais);

let ivaGalletas = ivaEnElPaisDeLaCompra(precioDelProducto);
alert("El precio de tu producto en " + pais + " con iva es de: " + ivaGalletas);