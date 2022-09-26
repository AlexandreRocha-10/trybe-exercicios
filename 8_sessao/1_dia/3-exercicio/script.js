const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const aluno = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}

const exame = (rightAnswers, studentAnswers, callback) => {
  let points = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    points += callback(rightAnswers[index], studentAnswers[index]);
  }
  return points;
}

console.log(exame(RIGHT_ANSWERS, STUDENT_ANSWERS, aluno));