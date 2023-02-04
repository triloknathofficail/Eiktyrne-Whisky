 
const swiper = new Swiper('.swiper', {
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });





var kuch = gsap.timeline()
kuch.from("#nav",{
    y:-100,
    opacity:0,
    duration:1,
})
.from("#img10",{
    y:200,
    opacity:0,
    duration:0.9,
})
.from("#i1",{
    y:20,
    opacity:0,
    duration:0.9,
})
.from("#i2",{
    y:20,
    opacity:0,
    duration:0.9,
})
.from("#i3",{
    y:20,
    opacity:0,
    duration:0.9,
})
.from("#i4",{
    y:20,
    opacity:0,
    duration:0.9,
})
.from("#i5",{ 
    opacity:0,
    duration:0.9,
})




var page2=gsap.timeline({
  scrollTrigger: {
    trigger: ".second-container",
    scroller: "body",
    start: "top 50%",
    // scrub:true 

  },
})

page2.from(".second-container-left",{
    y:20,
    opacity:0,
    duration:1,
})
page2.from("#s1",{
    y:20,
    opacity:0,
    duration:0.9,
})
page2.from("#s2",{
    y:20,
    opacity:0,
    duration:0.9,
})
page2.from("#s3",{
    y:20,
    opacity:0,
    duration:0.9,
})
page2.from("#s4",{
    y:20,
    opacity:0,
    duration:0.9,
})
page2.from("#s5",{
    y:20,
    opacity:0,
    duration:0.9,
})



var page3=gsap.timeline({
  scrollTrigger: {
    trigger: ".container-3",
    scroller: "body",
    start: "top 50%",
  }
})
page3.from("#botal-roler", {
  
    y:10,
    opacity:0,
    duration: 0.8,
  })
page3.from("#three1",{
    // y:-100,
    opacity:0,
    duration:0.8,
})
page3.from("#three2",{
    // y:-10,
    opacity:0,
    duration:0.8,
})
page3.from("#three3",{
    // y:-10,
    opacity:0,
    duration:0.8,
})



var page4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".forth-page-container-box-nav",
    scroller: "body",
    start: "top 60%"

  }
})

page4.from("#insta", {
   y:-10,
  opacity: 0,
duration:0.5
})

page4.from("#follow", {
    y:-10,
    opacity: 0,
  duration:0.6,

})

page4.from("#our", {
    y:-10,
    opacity: 0,
  duration:0.7

})

page4.from("#stay", {
    y:-10,
    opacity: 0,
  duration:0.8

})
page4.from(".email", {
    y:-10,
    opacity: 0,
  duration:0.9
})
page4.from("#follow1-box", {
    y:-10,
    opacity: 0,
  duration:0.9

})
page4.from("#f1",{
    y:20,
    opacity:0,
    duration:0.9,
})
page4.from("#f2",{
    y:20,
    opacity:0,
    duration:0.9,
})
page4.from("#f3",{
    y:20,
    opacity:0,
    duration:0.9,
})
page4.from("#f4",{
    y:20,
    opacity:0,
    duration:0.9,
})
page4.from("#f5",{
    y:20,
    opacity:0,
    duration:0.9,
})
page4.from(".forth-contant-box",{
  y:20,
  opacity:0,
  duration:0.9,
})






const button = document.querySelector(".menu");
const cross = document.querySelector(".cross");
const overlay = document.querySelector(".overlay");

button.addEventListener("click", function () {

    overlay.style.transform = "translateX(0)";
    overlay.style.transition = " all 1s";
    var ku = gsap.timeline()
      ku.from(".overlay-left",{
  
    opacity:0,
    duration:1,
    delay:1
    
  })
  .from("#f11",{
    x:300,
    opacity:0,
    duration:0.5,
})
.from("#f21",{
  x:300,
  opacity:0,
  duration:0.6,
})
.from("#f31",{
  x:300,
  opacity:0,
  duration:0.7,
})
.from("#f41",{
  x:300,
  opacity:0,
  duration:0.8,
})
.from("#f51",{
  x:300,
  opacity:0,
  duration:0.9,
})
.from(".forth-contant-box1",{
  x:300,
  opacity:0,
  duration:1,
})

});

cross.addEventListener("click", function () {
    overlay.style.transform = "translateX(100%)";
});

