let images = gsap.utils.toArray(".gallery img");
let tl = gsap.timeline({});
function init() {
  gsap.set(".gallery", { scale: 1, autoAlpha: 1 });
  gsap.set(images, { opacity: 0 });
  images.forEach(function (image, i) {
    tl.set(image, { opacity: 1 })
      .fromTo(
        "img",
        { filter: "contrast(0.5 ) brightness(5)" },
        { filter: " contrast(1) brightness(1)", ease: 'power2' }
      )
      .to(
        image,
        { filter: "contrast(0.5) brightness(6)", duration: 0.2, ease:'power2.in' },
        "+=0.8"
      )
  });
}

window.addEventListener("load", (e) => {
  init();
});
