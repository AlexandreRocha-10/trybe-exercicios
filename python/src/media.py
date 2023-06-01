lista = [2, 4, 6]

def media(nums):
    soma = 0
    for num in nums:
        soma += num
    return soma / len(nums)

print(media(lista))