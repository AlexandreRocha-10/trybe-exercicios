# def pares(n):
#     result = 0
#     for i in range(n):
#         if (i % 2 == 0):
#             result += 1
#     return result

def pares(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return pares(n - 1) + 1
    
