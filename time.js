const timeDiv = document.querySelector(".time");

const updateTime = () => {
  const time = new Date();

  const hours = time.getHours(),
    mins = time.getMinutes();

    timeDiv.innerHTML = `${hours}:${mins < 10 ? "0" : ""}${mins}`;
};


updateTime();

setInterval(() => {
  updateTime();
}, 3000);
