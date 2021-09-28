// Set the date we're counting down to
var countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 2);

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days + " день ";

  document.getElementById("hours").innerHTML = hours + " часов ";

  document.getElementById("minutes").innerHTML = minutes + " минут ";

  document.getElementById("seconds").innerHTML = seconds + " секунд ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

const buyBtn = document.querySelectorAll(".buy-button");
const modal = document.querySelector(".modal");
const modalWrap = document.querySelector(".wrapper-for-modal");
const modalClose = document.getElementById("modal-close");

buyBtn.forEach((e) => {
  e.addEventListener("click", function () {
    console.log("CLICK!!");
    modalWrap.style.display = "flex";
    modal.style.display = "block";
  });
});
modalClose.addEventListener("click", () => {
  modalWrap.style.display = "none";
  modal.style.display = "none";
});

const minusItem = document.getElementById("span-minus");
const plusItem = document.getElementById("span-plus");
const itemQuantity = document.getElementById("quantity");
const finalPrice = document.querySelector(".modal__final-span");

function increment() {
  let finalized = Number(itemQuantity.value);
  if (finalized >= 1) {
    finalized += 1;
    itemQuantity.value = finalized;
    finalPrice.innerHTML = finalized * 1799 + " грн";
    finalPrice.style.fontWeight = "800";
  }
}
function decrement() {
  let finalized = Number(itemQuantity.value);
  if (finalized >= 2) {
    finalized -= 1;
    itemQuantity.value = finalized;
    finalPrice.innerHTML = finalized * 1799 + " грн";
  }
}
