function submitAnswers() {
  let total = 5;
  let score = 0;

  let q1 = document.forms["quizForm"]["q1"].value;
  let q2 = document.forms["quizForm"]["q2"].value;
  let q3 = document.forms["quizForm"]["q3"].value;
  let q4 = document.forms["quizForm"]["q4"].value;
  let q5 = document.forms["quizForm"]["q5"].value;

  for (let i = 1; i <= total; i++) {
    if (eval("q" + i) === null || eval("q" + i) === "") {
      alert(`You missed question ${i}`);
      return false;
    }
  }

  let answers = ["b", "a", "d", "b", "d"];

  for (let i = 1; i <= total; i++) {
    if (eval("q" + i) === answers[i - 1]) {
      score++;
    }
  }

  alert(`You scored ${score} out of ${total}`);
}
