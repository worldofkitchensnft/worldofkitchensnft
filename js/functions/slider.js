export function slider({imageContainer, images, prevBtn, nextBtn}) {
  const d = document
  // Grab DOM Elements
  const imgContainer = d.querySelector(imageContainer)
  const imageCollection = d.querySelectorAll(images)
  const prev = d.querySelector(prevBtn)
  const next = d.querySelector(nextBtn)

  // Array images index
  let index = 0
  // Set Interval
  let interval = setInterval(startInterval, 3000);
  
  // Custom functions
  function startInterval() {
    index++
    moveCarousel()
  }

  function resetInterval() {
    clearInterval(interval)
    interval = setInterval(startInterval,3000);
  }
  function moveCarousel() {
    if(index > imageCollection.length - 1) {
      index = 0;
    } else if(index < 0) {
      index = imageCollection.length - 1
    }
    
    imgContainer.style.transform = `translateX(-${index * 100}%)`
  }

  function nextPage() {
    index++
    resetInterval()
    moveCarousel()
  }
  
  function prevPage() {
    index--
    resetInterval()
    moveCarousel()
  }
  // Events Listeners
  next.addEventListener('click', nextPage)
  prev.addEventListener('click', prevPage)
}