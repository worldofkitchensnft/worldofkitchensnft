export function toggleModal({openModal, modal, closeModal}) {
  const d = document

  const modalWindow = d.querySelector(modal)

  d.addEventListener('click', (e) => {
    if (e.target.matches(openModal)) {
      e.preventDefault()
      modalWindow.classList.add('modal--show')
    }
    
    if (e.target.matches(closeModal)) {
      e. preventDefault()
      modalWindow.classList.remove('modal--show')
    }
  })
}