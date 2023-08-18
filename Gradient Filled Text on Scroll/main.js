gsap.to('h1', {    
    backgroundImage: 'linear-gradient(45deg, #000 100%, #eee 200%, #000 300%)',
    duration: 2,
    ease: "none",
    scrollTrigger:{
        trigger: 'h1',
        start: 'top 50%',
        end: '+=100px',
        markers: true,
        scrub: true,
    }
})