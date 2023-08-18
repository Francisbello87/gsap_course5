function init() {
  gsap.set(".dragger", { x: 350 });
  gsap.to(".gallery", { autoAlpha: 1 });
  Draggable.create(".dragger", {
    type: "x",
    bounds: ".gallery",
    onDrag: function () {
      let x = 700 - gsap.getProperty(this.target, "x");
      gsap.set(".clipped", { clipPath: `inset(0px ${x}px 0px 0px)` });
    },
  });
}

window.addEventListener("load", init);
