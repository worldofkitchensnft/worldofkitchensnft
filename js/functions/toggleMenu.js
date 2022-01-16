export function toggleMenu({ panelBtn, panelLinks, navLink }) {
  const d = document;
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panelLinks).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }

    if (e.target.matches(navLink)) {
      d.querySelector(panelLinks).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}