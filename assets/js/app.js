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

var set = TweenMax.to("#sun", 30, {y: 85, ease: Linear.easeNone});

var scene = new ScrollMagic.Scene({
triggerElement:".start",
offset:100 ,
duration: 4000})
            .setTween(set)
            .addIndicators()
            .addTo(controller);

var fade = TweenMax.fromTo('#sun-reflect', 30, {opacity:.347}, {opacity:0});

var scene = new ScrollMagic.Scene({
triggerElement:".start",
offset:100 ,
duration: 4000})
            .setTween(fade)
            .addIndicators()
            .addTo(controller);

var color = TweenMax.to('.orange', 30, {fill: "rgb(5, 10, 102)"});

var scene = new ScrollMagic.Scene({
triggerElement:".start",
offset:100 ,
duration: 4000})
            .setTween(color)
            .addIndicators()
            .addTo(controller);