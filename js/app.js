"use strict";

const tl = gsap.timeline({
  defaults: {
    duration: 1.5,
  }
});

tl
  .fromTo(".card", {
    x: 30,
    autoAlpha: 0,
  }, {
    x: 0,
    autoAlpha: 1,
  })
  // .from(".card__img", {
  //   autoAlpha: 0,
  //   duration: 1.5,
  //   ease: "power4"
  // })
  .from([".card__title", ".card__description"], {
    y: 20,
    autoAlpha: 0,
    ease: "expo.out",
    stagger: .3
  })
  .from(".card__rate", {
    x: 50,
    autoAlpha: 0,
    ease: "expo.out",
  })
  .from("figure", {
    y: 20,
    autoAlpha: 0,
    
    ease: "expo.out",
    stagger: .3
  }, "-=.3")
  .from([".avatar", ".card__profileDetails"], {
    x: -20,
    autoAlpha: 0,
    ease: "expo.out",
    stagger: .3
  })
  .from(".attribution", {
    autoAlpha: 0,
  })