
function mostrar()
{

	/*Una software factory registra la siguiente informacion de sus empleados:
	Nombre 
	edad (validar)
	sexo (masculino - femenino - no binario)
	puesto (programador - analista - Qa)
	sueldo (entre 15000 y 70000)
	La empresa desea saber: se debe informar de existir, o informar que no existe , 
	en el caso que corresponda.
	a) promedio de sueldos para cada puesto
	b) el sexo del que percibe el mayor sueldo
	c) el nombre del empleado femenino con mas sueldo
	d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/


let nombre;
let edad;
let sexo;
let puesto;
let sueldo;
let seguir;
let acumProgramador = 0;
let acumAnalista = 0;
let acumQa = 0;
let contProgramador = 0;
let contAnalista = 0;
let contQa = 0;
let promProgramador = 0;
let promAnalista = 0;
let promQa = 0;
let flagSexo = 1;
let sexoMayorSueldo;
let mayorSueldo;
let femeninoMayorSueldo;
let nombreFemeninoMayorSueldo;
let flagFemenino = 1;
let contProgramadoresNBSueldo = 0;



do{

nombre = prompt("Ingrese nombre: ");
while(!(isNaN(nombre))){


nombre = prompt("Error, ingrese nombre: ");	

}

edad = parseInt(prompt("Ingrese edad: "));
while(isNaN(edad) || edad <= 17){

edad = parseInt(prompt("Error, Ingrese edad: "));

}

sexo = prompt("Ingrese sexo (masculino, femenino o no binario) : ");
while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario"){

sexo = prompt("Error, ingrese sexo (masculino, femenino o no binario) : ");

	
}

puesto = prompt("Ingrese su puesto (programador, analista o, Qa) : ").toLowerCase();
while(puesto != "programador" && puesto != "analista" && puesto != "qa"){

puesto = prompt("Error, ingrese su puesto (programador, analista o, Qa) : ").toLowerCase();

}

sueldo = parseFloat(prompt("Ingrese su sueldo (entre 15000 y 70000) : "));
while(sueldo < 15000 || sueldo >70000){

sueldo = parseFloat(prompt("Error, ingrese su sueldo (entre 15000 y 70000) : "));

}



if(puesto == "programador"){

acumProgramador = acumProgramador + sueldo;
contProgramador++;

}

if(puesto == "analista"){

acumAnalista = acumAnalista + sueldo;
contAnalista++;
	
}

if(puesto == "qa"){

acumQa = acumQa + sueldo;
contQa++;
	
}



if(flagSexo || sueldo > mayorSueldo){

sexoMayorSueldo = sexo;
mayorSueldo = sueldo;
flagSexo = 0;


}


if(sexo == "femenino"){

if(flagFemenino || sueldo > femeninoMayorSueldo){

femeninoMayorSueldo = sueldo;
nombreFemeninoMayorSueldo = nombre;
flagFemenino = 0;


}	
}


if(sexo == "no binario" && puesto == "programador" && (sueldo >= 20000 || sueldo <=55000)){

contProgramadoresNBSueldo++;

}


seguir = prompt("Desea ingresar otro empleado? (s/n)")	
}while(seguir=="s");




if(contProgramador != 0){

promProgramador = acumProgramador / contProgramador;

}

if(contAnalista != 0){

promAnalista = acumAnalista / contAnalista;
	
}


if(contQa != 0){

promQa = acumQa / contQa;
	
}
	

console.log("a) promedio de sueldos para cada puesto es de: Programador: " + promProgramador + " Analista: " + promAnalista + " Qa: " + promQa);

console.log("b) el sexo del que percibe el mayor sueldo es: " + sexoMayorSueldo + " con un sueldo de " + mayorSueldo);

if(flagFemenino != 0){

console.log("No se ingresaron empleados femeninos");	
}
else{

console.log("c) el nombre del empleado femenino con mas sueldo es: " + nombreFemeninoMayorSueldo + " con un sueldo de " + femeninoMayorSueldo);

}

if(contProgramadoresNBSueldo != 0){

console.log("d) La cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 es de: " + contProgramadoresNBSueldo);

}
else{

console.log("No se ingresaron programadores no binarios que cobran sueldos entre 20000 y 55000");
	
}





}
