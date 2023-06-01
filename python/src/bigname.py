names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def find_bigger(names):
    biggest = names[0]
    for name in names:
        if len(name) > len(biggest):
            biggest = name
    return biggest
    
print(find_bigger(names))