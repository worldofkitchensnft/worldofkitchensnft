import { toggleMenu } from "./functions/toggleMenu.js";
import { toggleSocials } from "./functions/toggleSocials.js";
import { barTextEffect } from "./functions/barTextEffect.js";

const  w = window;

const form = document.querySelector('.form-container');
let subject = document.querySelector('.subject');
let EmailSubjectTitle = document.getElementById('subjectTitle');
form.addEventListener('submit', (e) => EmailSubjectTitle.value = subject.value );

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
})
