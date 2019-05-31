/* Igual */
var vlr1 = 1;
var vlr2 = 2;

document.write("<h2>Operador de Comparação = </h2>");
if(vlr1 == vlr2){
    document.write(vlr1 + " é igual a " + vlr2);
} else{
    document.write(vlr1 + " é diferente de " + vlr2);
}

/* Diferente */
var vlr1 = 1;
var vlr2 = 3;

document.write("<h2>Operador de Comparação != </h2>");
if(vlr1 != vlr2){
    document.write(vlr1 + " é diferente de " + vlr2);
} else{
    document.write(vlr1 + " é igual a " + vlr2);
}

/*Menor que [IF ENCADEADO] */
var vlr1 = 5;
var vlr2 = 5;

document.write("<h2>Operador de Comparação < </h2>")
if(vlr1 < vlr2){
    document.write(vlr1 + "é menor que " + vlr2);
 } else if(vlr1 > vlr2){
    document.write(vlr1 + " é maior que " + vlr2);
} else {
document.write(vlr1 + " é igual a " + vlr2);
}

/* Maior que */
var vlr1 = 5;
var vlr2 = 4;

document.write("<h2>Operador de Comparação > </h2>")
if(vlr1 > vlr2){
    document.write(vlr1 + " é maior que " + vlr2);
    }else{
        document.write(vlr1 + " não é maior que " + vlr2);
    }

/* Menor ou igual */
var vlr1 = 1;
var vlr2 = 2;

document.write("<h2>Operador de Comparação <= </h2>");
if(vlr1 <= vlr2){
    document.write(vlr1 + " é menor ou igual a " + vlr2);
} else{
    document.write(vlr1 + " não é menor ou igual a " + vlr2);
}

/* Menor ou igual */
var vlr1 = 1;
var vlr2 = 2;

document.write("<h2>Operador de Comparação => </h2>");
if(vlr1 >= vlr2){
    document.write(vlr1 + " é maior ou igual a " + vlr2);
} else{
    document.write(vlr1 + " não é maior ou igual a " + vlr2);
}