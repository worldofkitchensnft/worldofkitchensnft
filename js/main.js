import { toggleMenu } from "./functions/toggleMenu.js";
import { toggleSocials } from "./functions/toggleSocials.js";
import { barTextEffect } from "./functions/barTextEffect.js";
import { subjectTitle } from "./functions/subjectTitle.js";
import { toggleModal } from "./functions/toggleModal.js";
import { slider } from "./functions/slider.js";
import scrollTopButton from "./functions/scrollTopButton.js";
import { addToken } from "./functions/addToken.js";

const  w = window;

w.addEventListener('DOMContentLoaded', () => {
  toggleMenu({
    panelBtn: '.panel-btn',
    panelLinks: '.nav-links',
    navLink: '.nav-links a'
  })

  toggleSocials({
    socialButton: '.socials-cta img',
    socialContainer: '.socials-links'
  })

  barTextEffect('.bars .bar', 'ul .bar-leyend')
  subjectTitle()

  toggleModal({
    openModal: '.header-cta',
    modal: '.modal',
    closeModal: '.modal-close .fa-times'
  })

  AOS.init({
    duration: 1000,
  });

  slider({
    imageContainer: '.images',
    images: '.image',
    prevBtn: '.prev',
    nextBtn: '.next'
  })

  scrollTopButton('.scrol-top-btn')

  addToken('.btn-cta')
})
