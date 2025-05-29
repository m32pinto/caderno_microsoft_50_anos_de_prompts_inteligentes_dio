def calcular_imposto(salario):
  aliquota = 0.00
  if (salario >= 0 and salario <= 1100):
    aliquota = 0.05
  elif (salario >= 1100.01 and salario <= 2500.00):
    aliquota - 0.10
  else: 
    aliquota = 0.15
  #criar as demais condições para as aliquotas de 10.00% e 15.00%
  return aliquota * salario

#le os valores de entrada
valor_salario = float(input())
valor_beneficios = float(input())

valor_imposto = calcular_imposto(valor_salario)
#calcula e imprime a saida (com 2 casa decimais)
saida = valor_salario - valor_imposto + valor_beneficios
print(f'{saida: .2f}')
