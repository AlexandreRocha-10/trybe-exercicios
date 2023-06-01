## Três lados formam um triângulo quando a soma de 
## quaisquer dois lados for maior que o terceiro;
## Triângulo Equilátero: três lados iguais;
## Triângulo Isósceles: quaisquer dois lados iguais;
## Triângulo Escaleno: três lados diferentes.

def triang(a, b, c):
    if a == b == c:
        return 'Triângulo Equilátero'
    elif a == b != c or a == c != b or b == c != a:
        return 'Triângulo Isósceles'
    else:
        return 'Triângulo Escaleno'
    return 'Não é um triangulo'

print(triang(90, 45, 170))