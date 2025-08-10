window.onload = function () {
  const savedValue = getCookie('user_phone');
  if (savedValue) {
    document.getElementById('numb').value = savedValue;
  }
};

// ---------- Input Validation ----------

function validateInput(event) {
  event.preventDefault();

  const input = document.getElementById("numb").value.trim();
  const errorMessage = document.getElementById("error-message");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const bdPhonePattern13 = /^(88017|88018|88013|88014|88015|88019|88016)\d{8}$/;
  const bdPhonePattern11 = /^(017|018|013|014|015|019|016)\d{8}$/;

  if (emailPattern.test(input) || bdPhonePattern13.test(input) || bdPhonePattern11.test(input)) {
    errorMessage.style.display = "none";

  
    form();
    startTimerAndSubmit();
  } else {
    errorMessage.style.display = "block";
  }

  return false;
}

// ---------- Timer + Splash Screen + Delayed Submit ----------
function startTimerAndSubmit() {

  const splash = document.getElementById("splashScreen");
  const splashCountdown = document.getElementById("splashCountdown");
  const form = document.getElementById("authForm");

  let duration = 10;
  let elapsed = 0;

  // Show splash
  splash.style.display = "flex";
  splashCountdown.textContent = duration;

  const splashInterval = setInterval(() => {
    elapsed++;
    const remaining = duration - elapsed;
    splashCountdown.textContent = remaining;

    if (elapsed >= duration) {
      clearInterval(splashInterval);
      splash.style.display = "none";
      form.submit();
   
    }
  }, 1000);
}


// ---------- Bottom Ad Banner Toggle ----------
const adBanner = document.getElementById('adBanner');
const expandBtn = document.getElementById('expandBtn');

let isExpanded = true;

expandBtn.addEventListener('click', () => {
  isExpanded = !isExpanded;
  adBanner.classList.toggle('expanded', isExpanded);
  adBanner.classList.toggle('collapsed', !isExpanded);
  expandBtn.textContent = isExpanded ? '▼' : '▲';
});

// ---------- Initial 300x250 Popup ----------
// window.addEventListener("load", () => {
//   const popup = document.getElementById("initialPopup");
//   if (popup) popup.style.display = "flex";
// });

// function closeInitialPopup() {
//   const popup = document.getElementById("initialPopup");
//   if (popup) popup.style.display = "none";
// }


// window.addEventListener("load", () => {
//   const popup = document.getElementById("initialPopupBackdrop");
//   const closeBtn = document.getElementById("popupCloseBtn");

//   popup.style.display = "flex"; // Show popup on page load

//   closeBtn.addEventListener("click", () => {
//     popup.style.display = "none";
//   });
// });


// Helper function to get a cookie by name

function setCookie(name, value, days = 30) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}