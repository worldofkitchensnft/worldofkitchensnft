const d = document, w = window;

export function toggleSocials({socialButton, socialContainer}) {
  d.addEventListener('click', (e) => {
    if (e.target.matches(socialButton)) {
      d.querySelector(socialContainer).classList.toggle('is-active')
    }
  })
}