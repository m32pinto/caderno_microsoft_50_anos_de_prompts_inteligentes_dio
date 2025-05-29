using System;

public class Desafio
{

public static void Main()
{
  //Lê os valores de entrada:
  float valorSalario = float.Parse(Console.ReadLine());
  float valorBeneficios = floar.Parse(Console.ReadLine());

float valorImposto = 0;
  if (valorSalario >= 0 && valorSalario <= 1100){
      //atribuiu a alíquota de 5% mediante o salário:
      valorImposto = 0.05F * valorSalario;
    }else if (valorSalario >= 1100.01 && valorSalario <= 2500){
      valorImposto = 0.10F * valorSalario;
    }else {
      valorImposto = 0.15F * valorSalario;
    }

  float saida = valorSalario - valorImposto + valorBeneficios;
  Console.WriteLine(saida.Tostring("0.00"));
  }
}
