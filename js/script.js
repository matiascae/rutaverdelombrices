var donaciones = [5,15,22,25,30,52,5,1,0];
var suma = 0;

for (var i = 0; i < donaciones.length; i++) {
  suma += donaciones[i];
}
function minimo(donaciones){

  var min = 0;

  for (monto of donaciones){

      if (monto < min){

          min = monto;

      }

  }

  return min;

}



function maximo(donaciones){

    var max = 0;
  
    for (monto of donaciones){
  
        if (monto > max){
  
            max = monto;
  
        }
  
    }
  
    return max;
  
  }
  function promedio(min, max,donaciones){

    var sum = 0;
  
    var cantidad = 0;
  
    for (monto of donaciones){
  
        if (monto > min && monto < max){
  
            sum += monto;
  
            cantidad++;
  
        }
  
    }
  
    return sum/cantidad;
  
  }
  
  var min = minimo (donaciones);
  var max = maximo(donaciones);
var prom = promedio (min,max,donaciones)
  
  
  
  

  
  

 
  console.log(min);
  console.log(max);
  console.log(prom)
  
 