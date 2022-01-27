export function loaderHide() {
  const loaderBar = document.querySelector(".loader-bar");
  const loader = document.querySelector(".loader");
  loaderBar.addEventListener("animationend", () => {
    loader.classList.add("show");
  });
}
