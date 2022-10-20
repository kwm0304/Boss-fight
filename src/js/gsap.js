function animation() {
    const tl = gsap.timeline({defaults:{duration: 1.5}});

    tl.from(`.title-section`, {y: -50, opacity:0});

    tl.from(`.login-section`, {backgroundPosition: `200px 0px`, opacity: 0}, `-=1.5`);
}

animation();