export function cardTokenToggle() {
  // Grab the DOM Elements
  const d = document;
  const cardToken = d.querySelector(".card-token");
  const tokenBtn = d.querySelector(".card-toggle");
  const tokenBtnArrow = d.querySelector(".card-toggle i");
  const copyToClipboardBtn = d.querySelector(".copy-btn");
  const contractToken = d.querySelector(".contract-token").textContent;

  // Custom functions
  function changeWidth(cardToken) {
    let width = 40;
    if (cardToken.clientWidth === 40) {
      width = cardToken.scrollWidth;
    }
    cardToken.style.width = `${width}px`;
  }

  function changeIcon(copyToClipboardBtn) {
    copyToClipboardBtn.classList.replace("fa-clone", "fa-check-circle");
    setTimeout(() => {
      copyToClipboardBtn.classList.replace("fa-check-circle", "fa-clone");
    }, 2000);
  }

  // Add the Event Listeners
  tokenBtn.addEventListener("click", function (e) {
    tokenBtnArrow.classList.toggle("rotate-arrow");
    changeWidth(cardToken);
  });

  copyToClipboardBtn.addEventListener("click", function () {
    navigator.clipboard
      .writeText(contractToken)
      .then(() => changeIcon(copyToClipboardBtn))
      .catch((err) => console.error("Something Fail"));
  });
}
