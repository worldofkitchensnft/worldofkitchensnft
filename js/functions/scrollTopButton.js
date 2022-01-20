const d = document, w = window;

export default function scrollTopButton(btn) {
  const $scrollBtn = d.querySelector(btn);
  
  w.addEventListener("scroll", (e) => {
    // w.pageYOffset || d.documentElement.scrollTop: estas propiedades daran el numero en pixeles que la barra de scroll se ha desplazado del top:0.
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if(scrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
    // console.log(w.pageYOffset, d.documentElement.scrollTop);
    
  });
  d.addEventListener("click", (e) => {
    if(e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0
      })
    }
  });
}