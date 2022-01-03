const correctAns = ["B", "B", "B", "B"];
const quizForm = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAns = [
    quizForm.q1.value,
    quizForm.q2.value,
    quizForm.q3.value,
    quizForm.q4.value,
  ];

  userAns.forEach((answer, index) => {
    if (answer === correctAns[index]) {
      score += 25;
    }
  });

  scrollTo(0, 0);
  result.classList.remove("d-none");

  let output = 0;
  const addTimer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(addTimer);
    } else {
      output++;
    }
  }, 10);
});
