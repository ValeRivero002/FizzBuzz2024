function generar_fizzbuzz(a) {
  if (a%3==0)
  {
    return "Fizz";
  }
  else{
    if(a%5==0)
    {
      return "Buzz";
    }
    else
    {
      return a + "";
    }
    
  }
}

export default generar_fizzbuzz;
