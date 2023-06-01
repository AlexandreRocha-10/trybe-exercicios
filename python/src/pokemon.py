import json
import random

def retrieve_pokemon(file):
    return json.load(file)

def random_pokemon(pokemon):
    list_names = []
    for result in pokemon['results']:
        name = result['name']
        list_names.append(name)
    return random.choice(list_names)

def choose_pokemon(pokemon_name):
    wrong_shot = True
    num_of_shots = 0
    while (wrong_shot):
        num_of_shots += 1
        shot = input("Quem é esse pokemon? ")
        if (shot == pokemon_name):
            print("Você acertou! Parabéns!")
            break
        elif num_of_shots == len(pokemon_name):
            print("Você errou!")
            break
        else:
            print("Dica: ", end="")
            for i in range(0, num_of_shots):
                print(pokemon_name[i], end="")
            print("")


# if __name__ == "__main__":
#     with open("pokemon.json") as file:
#         pokemons = json.load(file)["results"]
#         pokemon = random.choice(pokemons)
#         pokemon_name = pokemon["name"]

#     choose_poke = choose_pokemon(pokemon_name)
#     print(choose_poke)


    

if __name__ == "__main__":
    with open('pokemon.json') as file:
        pokemon_data = retrieve_pokemon(file)
    
    random_poke = random_pokemon(pokemon_data)

    choose_poke = choose_pokemon(random_poke)
    print(choose_poke)

    # with open('report.csv', 'w') as file:
    #     writecsv(file, ['Category', 'Percentage'], calc)