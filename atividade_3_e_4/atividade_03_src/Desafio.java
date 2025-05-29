import java.util.Scanner;

public class Desafio {

  //definir um classe
  //definir um método para processar o algoritmo "public static void main (String[] args) {}"
  
  public static void main (String[] args) {
    //lê os valores de entrada

    Scanner leitorDeEntradas = new Scanner(System.in);// scanner para lêr os dados de entrada
    float valorSalario = leitorDeEntradas.nextFloat(); //prefixo next para lêr o valores
    float valorBeneficios = leitorDeEntradas.nextFloat();
    
    //variáveis: valorSalario , valorBeneficios, valorImposto

    float valorImposto = 0;

    //se (valor do salário for maior igual a 0 e (&&) menor igual a 1100),{atribua 0,05% o imposto}  
    if (valorSalario >= 0 && valorSalario <= 1100){
      //atribuiu a alíquota de 5% mediante o salário:
      valorImposto = 0.05F * valorSalario;
    }else if (valorSalario >= 1100.01 && valorSalario <= 2500){
      valorImposto = 0.10F * valorSalario;
    }else {
      valorImposto = 0.15F * valorSalario;
    }
//TODO criar as demais condições para as alíquotas de 10.00% e 15.00%

//calcula e imprime a saída (com 2 casa decimais):

    float saida = valorSalario - valorImposto + valorBeneficios;
    System.out.println(String.format("%.2f", saida));
    //formato da saída
  }
}
