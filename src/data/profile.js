import { publicUrl } from '../lib/paths.js'
import photo320Avif from '../assets/images/rodrigo-320.avif'
import photo640Avif from '../assets/images/rodrigo-640.avif'
import photo320Webp from '../assets/images/rodrigo-320.webp'
import photo640Webp from '../assets/images/rodrigo-640.webp'
import photo640Jpg from '../assets/images/rodrigo-640.jpg'

export const profile = {
  fullName: 'Rodrigo César de Andrade Fayad Generoso',
  nameLines: ['Rodrigo César de Andrade', 'Fayad Generoso'],
  shortName: 'Rodrigo Generoso',
  initials: 'RG',

  photo: {
    avif: `${photo320Avif} 320w, ${photo640Avif} 640w`,
    webp: `${photo320Webp} 320w, ${photo640Webp} 640w`,
    fallback: photo640Jpg,
    width: 640,
    height: 640,
  },

  links: {
    github: 'https://github.com/rodrigofayaad22-tech',
    githubHandle: 'rodrigofayaad22-tech',
    linkedin: 'https://www.linkedin.com/in/rodrigo-generoso-498b29378/',
    linkedinHandle: 'rodrigo-generoso',
    email: 'rodrigofayaad22@gmail.com',
    whatsappNumber: '5561996433443',
    whatsappDisplay: '+55 61 99643-3443',
  },

  // The CV button stays hidden until public/curriculo-rodrigo-generoso.pdf exists
  // at build time (checked in vite.config.js).
  resume: {
    available: __RESUME_AVAILABLE__,
    url: publicUrl(__RESUME_FILE__),
    fileName: 'Curriculo-Rodrigo-Generoso.pdf',
  },
}

export const emailHref = `mailto:${profile.links.email}`
export const whatsappHref = `https://wa.me/${profile.links.whatsappNumber}`
