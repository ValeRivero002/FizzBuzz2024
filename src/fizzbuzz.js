function generar_fizzbuzz(a){ 
  let resultado=[];
  for(i=0;i<a;i++)
  {
    if(i%3==0 && i%5==0)
  {
      resultado.push("FizzBuzz");
  }
  else{
    if (i%3==0)
    {
      resultado.push("Fizz");
    }
    else{
      if(i%5==0)
      {
        resultado.push("Buzz");
      }
      else
      {
        resultado.push(i + "");
      }
      
    }

  }
  }
  return resultado.join(", ");
}

export default generar_fizzbuzz;
