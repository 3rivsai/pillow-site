// Set the target date for the countdown
const TARGET_DATE = new Date("Jan 31, 2025 00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = TARGET_DATE - now;

  // Calculate days, hours, minutes, and seconds
  const timer = {
    days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((timeRemaining / (1000 * 60)) % 60),
    seconds: Math.floor((timeRemaining / 1000) % 60),
  };

  // Display the result
  document
    .querySelectorAll(".b_f_timer ul li span")
    .forEach((element, index) => {
      setTimerValue(element, timer[element.id]);
    });

  // If the countdown is finished, display a message
  if (timeRemaining < 0) {
    clearInterval(countdown);
  }
}, 1000);

function setTimerValue(element, value) {
  if (!element) return;
  element.textContent = String(value).padStart(2, "0");
}
