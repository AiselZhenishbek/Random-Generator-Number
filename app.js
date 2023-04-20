const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);

function generateRandomNum() {
  const minNum = document.querySelector(".minNum").value;
  const maxNum = document.querySelector(".maxNum").value;

  randomNum = Math.floor(Math.random() * parseInt(maxNum));

  if (randomNum >= parseInt(minNum)) {
    const randomNumEl = document.querySelector(".randomNumEl");
    randomNumEl.innerHTML = randomNum
  }
}