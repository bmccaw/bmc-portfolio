let w = window.innerWidth;

document.addEventListener("DOMContentLoaded", (event) => {

  //animates boat and reflections using Greensock
  TweenMax.fromTo('#boat', 3, {
    rotation: 5,
    y: -4
  }, {
      rotation: -2,
      transformOrigin: '50% 100%',
      repeat: -1,
      yoyo: true,
      ease: Circ.easeInOut
    })

  TweenMax.to('#feTurb1', 40, {
    attr: {
      baseFrequency: `${0.0} ${0.007}`
    },
    repeat: -1,
    yoyo: true
  });
  TweenMax.to('#feTurb2', 40, {
    attr: {
      baseFrequency: `${0.002} ${0.007}`
    },
    repeat: -1,
    yoyo: true
  })
  
  //ties sunset animations to scroll using ScrollMagic
  var controller = new ScrollMagic.Controller();

  var set = TweenMax.to("#sun", 30, { y: 85, ease: Linear.easeNone });

  var scene = new ScrollMagic.Scene({
    triggerElement: ".start",
    offset: 100,
    duration: "500%"
  })
    .setTween(set)
    // .addIndicators()
    .addTo(controller);

  var fade = TweenMax.fromTo('#sun-reflect', 30, { opacity: .347 }, { opacity: 0 });

  var scene = new ScrollMagic.Scene({
    triggerElement: ".start",
    offset: 100,
    duration: "500%"
  })
    .setTween(fade)
    // .addIndicators()
    .addTo(controller);

  var color = TweenMax.to('.orange', 30, { fill: "rgb(5, 10, 102)" });

  var scene = new ScrollMagic.Scene({
    triggerElement: ".start",
    offset: 100,
    duration: "500%"
  })
    .setTween(color)
    // .addIndicators()
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
    triggerElement: "#about",
    duration: "30%"
  })
    .setPin("#about")
    .offset(250)
    // .addIndicators({name: "about"})
    .addTo(controller);


  var scene = new ScrollMagic.Scene({
    triggerElement: "#work",
    duration: "30%"
  })
    .setPin("#work")
    .offset(450)
    // .addIndicators({name: "work"})
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#contact"
  })
    .setPin("#contact")
    .offset(200)
    // .addIndicators({name: "contact"})
    .addTo(controller);


if (w < 812) {
  controller.enabled(false);
  TweenMax.killAll();
} else {
  controller.enabled(true);
}

});