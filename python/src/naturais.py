nums = input('Insira os numeros separados por espaco: ')

array_nums = nums.split(' ')

sum = 0

for num in array_nums:
    if num.isnumeric():
        sum += int(num)
    else:
        print('Número inválido')
    
print(f"A soma dos valores válidos é: {sum}")