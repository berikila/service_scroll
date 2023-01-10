
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles(".container-hero div")

ScrollTrigger.matchMedia({

  // desktop
  "(min-width: 800px)": function() {
    // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
    // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    // Timeline for fading in and fading out the text

    // var targets = document.querySelectorAll(".container-hero div");

    // targets.forEach(target => {
    //   const tl = gsap.timeline({
    //     defaults: {duration: 1},
    //     scrollTrigger: {
    //       trigger: target,
    //       // markers: true,
    //       scrub: true,
    //       start: "center 50%",
    //       end: "bottom top",
    //       pin: true
    //     }
    //   })
    //   .fromTo(target, {y: 25}, {y: -25})
    //   .from(target, {opacity: 0, duration: 0.2}, 0)
    //   .to(target, {opacity: 0, duration: 0.2}, 0.8)
    // });
  
  },
  // mobile
  "(max-width: 799px)": function() {
    // The ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore.
    // var targets = document.querySelectorAll(".container-hero div");

    // targets.forEach(target => {
    //   const tl = gsap.timeline({
    //     defaults: {duration: 1},
    //     scrollTrigger: {
    //       trigger: target,
    //       // markers: true,
    //       scrub: true,
    //       start: "center 50%",
    //       end: "bottom -50%",
    //       pin: true
    //     }
    //   })
    //   .fromTo(target, {y: 25}, {y: -25})
    //   .from(target, {opacity: 0, duration: 0.2}, 0)
    //   .to(target, {opacity: 0, duration: 0.2}, 0.8)
    // });
  },


  
  // all
  "all": function() {
    console.clear();

    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");

    canvas.width = 630;
    canvas.height = 680;

    const frameCount = 30;
    const currentFrame = index => (
      `./img/sprite/${(index + 1).toString().padStart(4, '0')}.jpg`
    );

    const images = []
    const airpods = {
      frame: 0
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: '#spritez',
        start: "20% center",
        // endTrigger: ".section_2",
        end: "30% center",
        // pin: true,
        // markers: true,
        scrub: 1
      },
      onUpdate: render
    });

    images[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[airpods.frame], 0, 0);
    }

    // Timeline for scaling the image when scrolling begins

    var tl = gsap.timeline({
      scrollTrigger: {
        scrub: true
      }
    });

    // tl.from("#hero-lightpass", {
    //   scale: 1.2,
    //   duration: 1
    // }, 0)
    // .to("#hero-lightpass", {
    //   scale: 1,
    //   duration: 0.25
    // }, 0.75)
  }
});

// jQuery(document).ready(function(){
//   window.onscroll = function() {
//       if (window.pageYOffset >= 200){
//           jQuery('.furnimg').css({
//             position: 'fixed',
//             bottom: "0px",
//             // right: "0px",
//             // left: "1000px"

//           });
//       }
//       else {
//           jQuery('.furnimg').css({position: 'fixed',
//           // top: "0px"
//         });
//       }
//   }
// });


let intTimeline = gsap.timeline({
  scrollTrigger:{
      trigger: '.container',
      start: "0% top ",
      // endTrigger: ".images-container",
      end: "+=100%",
      scrub: true,
      markers: true,
      toggleActions: "play reverse play reverse",
      // pin:true
  }
  }); 

  intTimeline.to(".img1", { delay: 0.25, yPercent: -150,   ease: "power4.out"});
  intTimeline.to(".img2", { delay: 0.25, yPercent: -250,   ease: "power2.out"});
  intTimeline.to(".img3", { delay: 0.25, yPercent: -250,   ease: "power2.out"});
  // intTimeline.to(".int", {opacity: 0, ease: "power4.out"},0);

  intTimeline.to(".furnth", {opacity: 1, ease: "power4.out"},0);
  intTimeline.to(".inth", {opacity: 0.3, ease: "power4.out"},0);
  intTimeline.to(".intp", {opacity: 0, ease: "power4.out"},0.5);
  intTimeline.to(".intbtn", {opacity: 0, ease: "power4.out"},0.5);
  intTimeline.to("#crc1", { fill: "#FFFFFF", ease: "power4.out"},0.5);

  


  intTimeline.to("#crc2", {y: -100, fill: "#A6A6A6", ease: "power4.out"},1);
  intTimeline.to(".furnt", {y: -190, ease: "power4.out"},1);
  intTimeline.to(".furntp", {y: -200, opacity: 1, ease: "power4.out"},1);

 
  intTimeline.to("#furnbtn", {y: -200, opacity: 1, ease: "power4.out"},1);
  // intTimeline.to("#sprite", {y: -400, opacity: 1, ease: "power4.out"},1);
  intTimeline.to("#crc2", {y: -200, ease: "power4.out"},1);

  intTimeline.to(".furnimg", { opacity: 1, ease: "power4.out"});
  
  
  intTimeline.to('.ind', { delay: 2, ease: "power4.out", attr: {d: 'M12 29L12 196'}},3)

  intTimeline.to(".furnimg", { delay: 0.1, opacity: 0, ease: "power4.out"});
  intTimeline.to(".extimg", { y: 200, opacity: 1, ease: "power4.out"});

  intTimeline.to("#crc3", {  delay: 2, y: -200, ease: "power4.out"},3);
  intTimeline.to(".furntp, #furnbtn", { delay: 2, opacity: 0, ease: "power4.out"},3);
  intTimeline.to(".exth", {  delay: 2, y: -200, fill: "#A6A6A6", ease: "power4.out"},3);
  intTimeline.to("#extbtn, .extp", {  delay: 2, y: -200, opacity: 1, ease: "power4.out"},3);
  intTimeline.to("#crc2", {  delay: 2,  fill: "#FFFFFF", ease: "power4.out"},3);
  intTimeline.to("#crc3", {  delay: 2,  fill: "#A6A6A6", ease: "power4.out"},3);
  intTimeline.to(".extimg", {  delay: 2,  y: -550, ease: "power4.out"},3);
  intTimeline.to(".furnth", {opacity: 0.3, ease: "power4.out"},3);
  intTimeline.to(".exth", {opacity: 1, ease: "power4.out"});
  // let furnTimeline = gsap.timeline({
  //   scrollTrigger:{
  //       trigger: '.container',
  //       start: "0% top ",
  //       endTrigger: ".images-container",
  //       end: "+=100%",
  //       scrub: true,
  //       // markers: true,
  //       toggleActions: "play reverse play reverse",
  //       pin:true
  //   }
  //   }); 





  
ScrollTrigger.matchMedia({

  // desktop
  "(min-width: 800px)": function() {
    // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
    // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    // Timeline for fading in and fading out the text

    // var targets = document.querySelectorAll(".container-hero div");

    // targets.forEach(target => {
    //   const tl = gsap.timeline({
    //     defaults: {duration: 1},
    //     scrollTrigger: {
    //       trigger: target,
    //       // markers: true,
    //       scrub: true,
    //       start: "center 50%",
    //       end: "bottom top",
    //       pin: true
    //     }
    //   })
    //   .fromTo(target, {y: 25}, {y: -25})
    //   .from(target, {opacity: 0, duration: 0.2}, 0)
    //   .to(target, {opacity: 0, duration: 0.2}, 0.8)
    // });
  
  },
  // mobile
  "(max-width: 799px)": function() {
    // The ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore.
    // var targets = document.querySelectorAll(".container-hero div");

    // targets.forEach(target => {
    //   const tl = gsap.timeline({
    //     defaults: {duration: 1},
    //     scrollTrigger: {
    //       trigger: target,
    //       // markers: true,
    //       scrub: true,
    //       start: "center 50%",
    //       end: "bottom -50%",
    //       pin: true
    //     }
    //   })
    //   .fromTo(target, {y: 25}, {y: -25})
    //   .from(target, {opacity: 0, duration: 0.2}, 0)
    //   .to(target, {opacity: 0, duration: 0.2}, 0.8)
    // });
  },


  // all
  "all": function() {
    console.clear();

    const canvas = document.getElementById("3d-exter");
    const context = canvas.getContext("2d");

    canvas.width = 720;
    canvas.height = 480;

    const frameCount = 22;
    const currentFrame = index => (
      `./img/exter/${(index + 1).toString().padStart(4, '0')}.png`
    );

    const images = []
    const airpods = {
      frame: 0
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }
    // gsap.set(".extimg", {y: -400})

    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      
      scrollTrigger: {
        trigger: '#spritez',
        start: "top center",
        // endTrigger: ".section_2",
        end: "bottom bottom",
        // pin: true,
        // markers: true,
        scrub: 1
      },
      onUpdate: render
    });

    images[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[airpods.frame], 0, 0);
    }

    // Timeline for scaling the image when scrolling begins

    var tl = gsap.timeline({
      scrollTrigger: {
        scrub: true
      }
    });

    // tl.from("#hero-lightpass", {
    //   scale: 1.2,
    //   duration: 1
    // }, 0)
    // .to("#hero-lightpass", {
    //   scale: 1,
    //   duration: 0.25
    // }, 0.75)
  }
});
