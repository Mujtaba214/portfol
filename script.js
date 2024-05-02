let tl = gsap.timeline();

tl.from(
  ".navbar, .navbar .container-fluid a, .navbar .nav-med",
  {
    y: -100,
    duration: 1,
    delay: 1,
    scale: 0,
    opacity: 1,
    stagger: 0.23,
  }
);

tl.from(".img", {
  y: 100,
  duration: 0.5,
  delay: 0.5,
  scale: 0,
  opacity: 1,
});

tl.from(".heading-services", {
  y: -50,
  duration: 1,
  delay: 0.8,
  opacity: 0,
  scale: 0,
});

tl.from(".graphics", {
  y: -50,
  duration: 1,
  delay: 0.6,
  opacity: 0,
  scale: 0,
});

tl.from(".card-group .card-about", {
  x: -50,
  duration: 1,
  delay: 1,
  opacity: 0,
  scale: 0,
  stagger: 0.23,
});

tl.from(".emotes .col", {
  x: -50,
  duration: 1,
  delay: 1,
  opacity: 0,
  scale: 0,
  stagger: 0.23,
});


tl.from(".webs .col", {
  x: -50,
  duration: 0.71,
  delay:0.002,
  opacity: 0,
  scale: 0,
});