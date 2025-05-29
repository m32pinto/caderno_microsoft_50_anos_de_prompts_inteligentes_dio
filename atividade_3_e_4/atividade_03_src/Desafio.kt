Object ReceitaFederal{
  fun CalcularImposto(Salario: Double): Double{
    val aliquota = when{
      (Salario >= 0 && Salario <= 1100) -> 0.05
        (Salario >= 1100.01 && Salario <= 2500.00) -> 0.10
      else -> 0.15
    }
    return aliquota * Salario
  }
}

fun main(){
  val valorSalario = readline()!!.toDouble();
  val valorBeneficios = readline()!!.toDouble();

  val valorImposto = ReceitaFederal.calcularImposto(valorSalario);
  val saida = valorSalario - valorImposto + valorBeneficios;

  println(String.format("%.2f", saida));
}
