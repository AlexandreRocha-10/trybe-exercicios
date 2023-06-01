def names(name):
    length = len(name)
    for i in range(length, 0, -1):
        print(name[:i])

nome = input("Digite um nome: ")
names(nome)
