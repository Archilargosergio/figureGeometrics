// Cuadrado

// console.group("Cuadrado");
// const ladoCuadrado = 5;

// Perímetro cuadrado

function formulePerimeterSquare (size){
    return size * 4
 }
 
 function perimeterSquare (){
   const textSquare = document.getElementById("text-input-square");
   const finalTextSquare = textSquare.value;
   const perimeter = formulePerimeterSquare (finalTextSquare);
   alert ("The square perimeter is " + perimeter + " cm");
 }
 // console.log("El perímetro del cuadrado es " + perímetroCuadrado + " cm");
 
 // área cuadrado
 
 function formuleAreaSquare(size) {
    return size * size;
 } 
 
 function areaSquare (){
    const textSquare = document.getElementById("text-input-square");
    const finalTextSquare = textSquare.value;
    const area = formuleAreaSquare (finalTextSquare);
    alert ("The square are is " + area + " cm^2");
  }
 // console.log("El área del cuadrado es " + áreaCuadrado + " cm^2");
 // console.groupEnd();
 
 // Triángulo
 
 // console.group("Triángulo");
 // const ladoTriángulo1 = 4;
 // const ladoTriángulo2 = 6;
 // const ladoTriángulo3 = 8;
 
 // Prímetro Triángulo
 
 function formulePerimeterTriangle(ladoTriángulo1, ladoTriángulo2, ladoTriángulo3){
    return ladoTriángulo1 + ladoTriángulo2 + ladoTriángulo3;
 } 
 
 function perimeterTriangle (){
    const textTriangle = document.getElementById("text-input-sizeTriangle");
    const finalTextTriangle = textTriangle.value;
    const area = formulePerimeterTriangle (finalTextTriangle, finalTextTriangle, finalTextTriangle);
    alert ("The triangle perimeter is " + area + " cm");
  }
 // console.log("El perímetro del triángulo es " + perímetroTriángulo + " cm");
 
 // área triángulo
 
 // const baseTriángulo = 14;
 // const alturaTriángulo = 18;
 
 function formuleAreaTriangle(baseTriángulo, alturaTriángulo) {
  return (baseTriángulo * alturaTriángulo) / 2;
 }
 
 function areaTriangle (){
    const textBaseTriangle = document.getElementById("text-input-baseTriangle");
    const finalTextBaseTriangle = textBaseTriangle.value;
    const textTriangle = document.getElementById("text-input-heightTriangle");
    const finalTextHeightTriangle = textTriangle.value;
    const area = formuleAreaTriangle (finalTextBaseTriangle, finalTextHeightTriangle);
    alert ("The triangle area is " + area + " cm^2");
  }
 // console.log("El área del triángulo es " + áreaTriángulo + " cm^2");
 // console.groupEnd();
 
 // Circulo
 
 // console.group("Círculo");
 
 // const radioCirculo = 4;
 function diametroCircle (radioCirculo){
    return radioCirculo * 2; 
 }
 const pi = Math.PI;
 
 // Perímetro Círculo
 
 function formulePerimeterCírculo (radioCirculo) {
     const diameter = diametroCircle(radioCirculo);
     return Math.ceil(diameter * pi);
 }
 
 function perimeterCircle (){
    const textCircle = document.getElementById("text-input-circle");
    const finalTexCircle = textCircle.value;
    const area = formulePerimeterCírculo (finalTexCircle);
    alert ("The circle perimeter is " + area + " cm");
  }
 // console.log("El perímetro del cìrculo es " + perímetroCírculo + " cm");
 
 // área círculo
 
 function formuleAreaCircle (radioCirculo) {
   return  Math.ceil((radioCirculo * radioCirculo) * pi);
 }
 
 function areaCircle (){
    const textCircle = document.getElementById("text-input-circle");
    const finalTexCircle = textCircle.value;
    const area = formuleAreaCircle (finalTexCircle);
    alert ("The circle are is " + area + " cm^2");
  }
 // console.log("El área del círculo es " + áreaCírculo + " cm^2");
 // console.groupEnd();