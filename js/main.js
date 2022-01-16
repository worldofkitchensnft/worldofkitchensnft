import { toggleMenu } from "./functions/toggleMenu.js";
import { toggleSocials } from "./functions/toggleSocials.js";
import { barTextEffect } from "./functions/barTextEffect.js";
import { subjectTitle } from "./functions/subjectTitle.js";
import { toggleModal } from "./functions/toggleModal.js";
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
    duration: 2000,
    once:true
  });
})
