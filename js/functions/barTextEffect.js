export function barTextEffect(bars, barsLeyend) {
  const barsNodeList = document.querySelectorAll(bars)
  const barsLeyendNodeList = document.querySelectorAll(barsLeyend)
  barsNodeList.forEach((bar, indexBar) => {
    bar.addEventListener('mouseover', () => {
      barsLeyendNodeList.forEach((leyendBar, indexLeyend) => {
        if (indexBar === indexLeyend) {
          leyendBar.classList.add('text-active')
          bar.addEventListener('mouseleave', () => leyendBar.classList.remove('text-active'))
        }
      })
    })
  })
}