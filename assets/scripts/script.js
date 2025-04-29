const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function getTime() {
  const getTimeSystem = new Date();
  const getHourSystem = getTimeSystem.getHours();
  const getMinuteSystem = getTimeSystem.getMinutes();
  const getSecondSystem = getTimeSystem.getSeconds();

  hour.textContent = getHourSystem < 10 ? "0" + getHourSystem : getHourSystem;;
  minute.textContent = getMinuteSystem < 10 ? "0" + getMinuteSystem : getMinuteSystem;
  second.textContent = getSecondSystem < 10 ? "0" + getSecondSystem : getSecondSystem;
}

setInterval(getTime, 1000);
