const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function firstpageanim() {
  var tl = gsap.timeline();

  tl.from(".nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from(".herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

let timeout;

function shrinkcircle() {
  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;

  

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);
    let xdiff = dets.clientX - xprev;
    let ydiff = dets.clientY - yprev;

    xscale = gsap.utils.clamp(0.7, 1.3, xdiff);
    yscale = gsap.utils.clamp(0.7, 1.3, ydiff);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circlemouse(xscale, yscale);

    timeout = setTimeout(() => {
      document.querySelector(
        ".minicircle"
      ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}

function circlemouse(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      ".minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

  
  
document.querySelectorAll(".elem").forEach(function(elem){
  let imgdiff=0;
  let root=0;
 
  elem.addEventListener("mouseleave", function(dets){
    gsap.to(elem.querySelector("img"),
    {
      opacity:0,
      ease:Power1,
      duration:0.5
    });
     });
 elem.addEventListener("mousemove", function(dets){
let diff=dets.clientY - elem.getBoundingClientRect().top;
console.log(diff)


imgdiff= dets.clientX - root;
root=dets.clientX;

gsap.to(elem.querySelector("img"),
{
  opacity:1,
  ease:Power1,
  top:diff,
  left:dets.clientX,
  rotate: gsap.utils.clamp(-12, 12, imgdiff),
  
});
 });
});



shrinkcircle();
circlemouse();
firstpageanim();
