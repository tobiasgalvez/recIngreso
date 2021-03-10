function mostrar()
{
	
/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, 
teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas 
marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, 
se aplica un descuento del 10% sobre la compra 
Si la marca es ArgentinaLuz 
y compra 3 o mas unidades, el descuento es del 5%. 
Ningun otro caso aplica descuento. 
al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)*/


let nombre;
let cantidadLamparas;
let marca;
let precio;
let precioCompra;
let seguir;
let descuentoFelipeLamparas = 0;
let descuentoArgentinaLuz = 0;
let precioCompraConDescuentoFL;
let precioCompraConDescuentoAL;
let recaudado;
let acumFelipeLamparas = 0;
let acumArgentinaLuz = 0;
let acumIlluminatis = 0;
let contFelipeLamparas = 0;
let contArgentinaLuz = 0;
let contIlluminatis = 0;
let totalDeDescuentos;
let promFelipeLamparas = 0;
let promArgentinaLuz = 0;
let promIlluminatis = 0;
let flag = 1;
let marcaMasVentas;


do{

nombre = prompt("Ingrese nombre del cliente: ");
while(!(isNaN(nombre))){
    
    
nombre = prompt("Error, ingrese nombre del cliente: ");	
    
}	


cantidadLamparas = parseInt(prompt("Ingrese cantidad de lámparas: "));
while(isNaN(cantidadLamparas)){

cantidadLamparas = parseInt(prompt("Error, ingrese cantidad de lámparas: "));


}

marca = prompt("Ingrese marca (FelipeLamparas - ArgentinaLuz - Illuminatis)").toLowerCase();
while(marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis"){

marca = prompt("Error, ingrese marca (FelipeLamparas - ArgentinaLuz - Illuminatis)").toLowerCase();
	
}

precio = parseFloat(prompt("Ingrese precio por unidad"));
while(isNaN(precio)){

precio = parseFloat(prompt("Error, ingrese precio por unidad"));	

}

precioCompra = precio * cantidadLamparas;
recaudado = recaudado + precioCompra;

if(marca == "felipelamparas" && cantidadLamparas >5){

descuentoFelipeLamparas = precioCompra * 10 / 100;
precioCompraConDescuentoFL = precioCompra - descuentoFelipeLamparas;

}

else if(marca == "argentinaluz" && cantidadLamparas >= 3){

descuentoArgentinaLuz = precioCompra * 5 / 100;
precioCompraConDescuentoAL = precioCompra - descuentoArgentinaLuz;	


if (marca == "felipelamparas"){

acumFelipeLamparas = acumFelipeLamparas + cantidadLamparas;
contFelipeLamparas++;



}
if (marca == "argentinaluz"){

	acumArgentinaLuz = acumArgentinaLuz + cantidadLamparas;
	contArgentinaLuz++;
	
	
	
	}

	if (marca == "illuminatis"){

		acumIlluminatis = acumIlluminatis + cantidadLamparas;
		contIlluminatis++;
		
		
		
		}

		

		if (acumFelipeLamparas > acumArgentinaLuz && acumFelipeLamparas > acumIlluminatis) {
			marcaMasVentas = "FelipeLamparas"


		} else if (acumArgentinaLuz >= acumFelipeLamparas && acumArgentinaLuz > acumIlluminatis) {
			marcaMasVentas = "ArgetinaLuz"

		}
		 else {
			marcaMasVentas = "Illuminatis"
		}



}




seguir = prompt("Desea ingresar otra venta? (s/n) : ");
}while(seguir == "s");





console.log("A- la empresa recaudó un total de $" + recaudado);

totalDeDescuentos = descuentoFelipeLamparas + descuentoArgentinaLuz;

console.log("B- la empresa en concepto de descuentos perdió un total de " + totalDeDescuentos);

if(contFelipeLamparas != 0){

promFelipeLamparas = acumFelipeLamparas / contFelipeLamparas;


}

if(contArgentinaLuz != 0){

	promArgentinaLuz = acumArgentinaLuz / contArgentinaLuz;
	
	
	}

	if(contIlluminatis != 0){

		promIlluminatis = acumIlluminatis / contIlluminatis
		
		
		}	


console.log("C- El promedio de la cantidad de lamparas vendidas de cada marca es de: FelipeLamparas:" + promFelipeLamparas + " ArgentinaLuz:" + promArgentinaLuz + " Illuminatis:" + promIlluminatis);
console.log("D- La marca con más ventas es: " + marcaMasVentas)


}
