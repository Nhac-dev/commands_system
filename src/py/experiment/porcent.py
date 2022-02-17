value_product = int(input("\nDigite o valor do produto: R$"))
value_percent = int(input("\nDigite o porcentagem do desconto: %"))
value_desconted = (value_product * value_percent) / 100
value_final = value_product - value_desconted

print(f"Valor do produto: {value_product};\nValor a ser descotado: {value_percent}%\{value_desconted};\nValor Final: {value_final}.")