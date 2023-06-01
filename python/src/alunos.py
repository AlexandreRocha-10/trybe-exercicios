recovery_students = []

with open('file.txt') as notas:
    for nota in notas:
        aluno = nota
        aluno = aluno.split(' ')
        if int(aluno[1]) < 6:
            recovery_students.append(aluno[0])

with open('req.txt', mode='w') as req:
    print(recovery_students)
    req.writelines(recovery_students)