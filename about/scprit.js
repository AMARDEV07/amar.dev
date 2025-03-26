

window.onload=function(){
    var shadowroot=document.querySelector('spline-viewer').shadowRoot;
    shadowroot.querySelector('#logo').remove();
}
// gsap.registerPlugin(ScrollTrigger); // Ensure ScrollTrigger is registered

var textWrapper = document.querySelector(".ml12");

//every letter inside span
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Animation for ml12 text wave type effect
function iamgesContainerAnimation(){
    gsap.from(".ml12 .letter", {
        translateY: 100,
        opacity: 0,
        ease: "easeOutExpo",
        duration:1,
        stagger: 0.06,
        scrollTrigger: {
            trigger: ".ml12",
            start: "top 80%",
            end: "top 50%",
            scrub: false,
            toggleActions: "play none none reverse", // Play when enters, reverse when exits
        }
    });
    
    // Left section animation bg 
    gsap.from(".left", {
        x: "-100%",
        opacity: 0,
        ease: "expo.out",
        duration:7,
        scrollTrigger: {
            trigger: ".left",
            start: "top 90%",
            end: "top 50%",
            scrub: false,
            toggleActions: "play none none reverse",
        }
    });
    
    // Header animation left to right
    gsap.from(".headerr h1 ", {
        x: "-140%",
        opacity: 0,
        ease: "expo.out",
        duration: 7,
        scrollTrigger: {
            trigger: ".headerr h1",
            start: "top 90%",
            end: "top 50%",
            scrub: false,
            toggleActions: "play none none reverse",
        }
    });
    
    
    // Images animation 4images
    gsap.from(".images > div", {
        x: 200,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.4,//delay betwen each element
        duration:3.6,
        scrollTrigger: {
            trigger: ".images",
            start: "top 50%",
            end: "top 50%",
            scrub: false,
            toggleActions: "play none none reverse",
        }
    });
    
    // Paragraph animation header-about section
    gsap.from(".header-about > p", {
        y: 100,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.2,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".header-about p",
            start: "top 60%",
            end: "top 50%",
            scrub: false,
            toggleActions: "play none none reverse",
        }
    });
    
    //headerr p animat6ion from down
    gsap.from(".mli", {
        y: 100,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.2,
        duration: 2,
      
    });
    
    // Blinking link animation (always runs)
    gsap.from(".link", {
        opacity: 0,
        ease: "steps(1)",
        repeat: -1,
        repeatDelay: 0.2,
        delay: 7.8,
    });
}

iamgesContainerAnimation()





function skillAnimation(){
    let tl = gsap.timeline({
 
        scrollTrigger: {
            trigger: '.skill-section',
            pin: true, // pin the trigger element while active
            start: '20% 50%', // when the top of the trigger hits the top of the viewport
            end: '50% 50%', // end after scrolling 500px beyond the start
            scrub: true,
            // markers: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
      
    })
    .to("#frontend", { opacity: 1, filter: "blur(0px)" })
    .to("#html", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#css", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#js", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#react", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#nextjs", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#nodejs", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#mongodb", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#gsap", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#locomotive", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#scrolltriger", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#communication", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#expresjs", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#dsa", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#ui", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#os", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#mysql", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#networking", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#dbms", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#backend", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#oops", { opacity: 1, filter: "blur(0px)" }, "+=2")
    .to("#c", { opacity: 1, filter: "blur(0px)" }, "+=2");

    
   
}
skillAnimation();