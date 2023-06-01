def test_email_validate():
    assert validate_email() == 'Is Valid'

def validate_email(email):
    index = 0
    if not email[index].isalpha():
        raise ValueError("Username should start with a letter")
    return 'Is valid'


entry = (input("Digite um email: "))
output = validate_email(entry)
print(output)