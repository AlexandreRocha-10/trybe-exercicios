class Retangulo:
    def __init__(self, base: int, altura: int) -> None:
        self.base = base
        self.altura = altura

    def calcular_area(self):
        return (self.base * self.altura)
    
    def calcular_perimetro(self):
        return (self.base + self.altura) * 2
    

retangulo = Retangulo(base=5, altura=10)
print("Área:", retangulo.calcular_area()) # Área: 50
print("Perímetro:", retangulo.calcular_perimetro()) # Perímetro: 30