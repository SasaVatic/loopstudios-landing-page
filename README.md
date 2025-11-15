# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See sections scroll animations

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [GSAP](https://gsap.com/) - JS animation library

### What I learned

I have learned how to apply animations through GSAP library and its ScrollTrigger plugin.

```ts
useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutRef.current,
      start: "top 30%",
      end: "50% 30%",
      scrub: true
    }
  })
  tl.from(imgRef.current, {
    x: -500,
    opacity: 0,
  }).from(descriptionRef.current, {
    x: 500,
    opacity: 0,
  }, "<")
}, { scope: aboutRef })
```

### Continued development

In future projects I want to learn more about GSAP and create more cool animations with it

### Useful resources

- [GSAP React Hook](https://gsap.com/resources/React/) - This is an amazing introduction about how to use GSAPs useGSAP React Hook.
- [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) - This helped me to understand and configure GSAP ScrollTigger.

## Author

- Website - [Saša Vatić](https://sasavatic.netlify.app/)
- Frontend Mentor - [_SabijaThor_](https://www.frontendmentor.io/profile/yourusername)
- LinkedIn - [Saša Vatić](https://www.linkedin.com/in/sasa-vatic/)
