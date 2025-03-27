//span convert into reveal for text animationb(1)

function revealToSpanAnimationsetup() {

    document.querySelectorAll(".revel")

        .forEach(function (elem) {
            //create teo span parent or child..
            let parent = document.createElement("span");
            let child = document.createElement('span');

            //parent and child both sets theri respective classes
            parent.classList.add("parent");
            child.classList.add("child");


            //span parent get child and child gets elem details.
            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            //elem replace its value with parent span..
            elem.innerHTML = "";
            elem.appendChild(parent);

        });

}

//value seter for visaual svg..or animation(2)
function valueseterForVIsualSvg() {
    //revel animation value jidden to start of homepage
    gsap.set("#nav a", { y: "-100%", opacity: 0 });
    gsap.set("#home span .child ", { y: "100%" });
    gsap.set("#home .row img ", { opacity: 0 });

    // value selector of visual svg
    // Iterate through all <g> elements inside #Visual
    document.querySelectorAll("#Visual > g").forEach(function (e) {
        // Try selecting the path or polyline directly within the <g> element
        var character = e.querySelector('path, polyline'); // Find the path or polyline inside <g>

        // Check if character (path or polyline) exists before trying to apply the styles
        if (character) {
            // Set strokeDasharray and strokeDashoffset to the path's total length
            character.style.strokeDasharray = character.getTotalLength() + 'px';
            character.style.strokeDashoffset = character.getTotalLength() + 'px';
        }
    });
}


// loder animation using gsap(3)
function StartinglodaerAnimation() {

    var tl = gsap.timeline();

    tl
        .from("#fs .child span", { //nav ka animation text come from -y 
            x: 100,
            stagger: .2,
            duration: 1.4,
            ease: Power3.easeInOut

        })
        .to("#fs .parent .child", {// //loder animation ma jo animation hora ha text ka span reavl class ki wajasa
            y: "-110%",
            duration: 1,
            ease: Circ.easeInOut

        })

        //black
        //loding animation--------------
        .to("#fs", {
            height: 0,
            duration: 1,
            ease: Circ.easeInOut
        })

        //greendiv
        .to("#elem", {
            height: "100%",
            top: 0,
            duration: 1,
            delay: -.8,
            ease: Circ.easeInOut
        })
        .to("#elem", {
            height: "0%",
            duration: 1,
            delay: -.5,
            ease: Circ.easeInOut,
            onComplete: function () {
                anamitionHomepage();
            }
        })
}

//svg animation(4)

function visuaanimateSVGcode() {


    // Animate paths or polyline inside <g> elements
    gsap.to("#Visual g g path, #Visual g g polyline", {
        strokeDashoffset: 0,
        duration: 2,
        ease: Expo.easeInOut,

    });
}
//   homepage animation(5)

function anamitionHomepage() {
    gsap.set("#nav a", { y: "-100%", opacity: 0 });//nav tag animation up to down
    gsap.set("#home span .child ", { y: "100%" });//row animation text up
    gsap.set("#home .row img ", { opacity: 0 });// arrow img


    let tl = gsap.timeline();
    tl
        .to("#nav a", {
            y: 0,
            opacity: 1,
            stagger: .05,
            ease: Expo.easeInOut
        })
        .to(".trival .parent .child",{ //trival ma mna creative or developer ko rakha ha taki dono ak sath phala animate ho
            y: 0,
            stagger: .01,
            duration: 1.5,
            ease: Expo.easeInOut

        })

        .to(".text .parent .child", {//then text section aniamtion h stagger ka dwara
            y: 0,
            stagger: .05,
            duration: 1.5,
            ease: Expo.easeInOut
        })

     
        .to("#home .row img", {
            opacity: 1,
            ease: Expo.easeInOut,
            delay: -.5,
            onComplete: function () {
                visuaanimateSVGcode();
            }
        })
        .from(".revel1", {
            y: 100,
            opacity: 1,
            ease: "power2.out",
            stagger: 0.2,
            duration: 1.5,
            scrollTrigger: {
                trigger: ".revel1",
                start: "top 60%",
                end: "top 50%",
                scrub: false,
                toggleActions: "play none none reverse",
            }
        });



}
//locomotive smoth scrolling code
function locomotiveaddforsmoth() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#home'),
        smooth: true
    });
}

//cards hover animation sa jo bg chanes ho rakha h,images imination hora ha 
function cardsHoveranimationBgchnage() {
    //select cnt div and abd use foreach becouse we selected all cnt div
    document.querySelectorAll(".cnt")

        .forEach(function (cnt) {
            var showingImg;
            // add event listner on age cnt div pa mousemove hoga toh

            cnt.addEventListener("mousemove", function (dets) {
                //check kraga ki kon sa image pa hover kra ha or us img ka index daga ya 
                console.log(dets.target.dataset.index)
                //this select cursor div and check how many children div in cursor and kn sa div pa animation on kr do 
                //target data set of animation
                document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
                showingImg = dets.target;
                // //jab na mouse move keta tha toh jo value mili ha x,y ki

                document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
                //filter grascale effect on
                showingImg.style.filter = "grayscale(1)"
                //bgc change according to img different img differnt color...
                //work bg div,btn
                document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
                document.querySelector(".see-btn").style.backgroundColor = "#" + dets.target.dataset.color;

            })

            cnt.addEventListener("mouseleave", function (dets) {
                //hover img animation  off
                document.querySelector("#cursor").children[showingImg.dataset.index].style.opacity = 0;
                //filter grascale effect off
                showingImg.style.filter = "grayscale(0)"
                //mouse leave colour reset
                document.querySelector("#work").style.backgroundColor = "#f2f2f2";
                document.querySelector(".see-btn").style.backgroundColor = "#f2f2f2";
            })

        })
}


//timeshow
function time() {
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours}:${mins.toString()} ${ampm}`;
    document.querySelector(".time").textContent = formattedTime;
    setTimeout(time, 1000);
}







revealToSpanAnimationsetup()//class reval convert into span jo setup krna tha wo letter animation nicha sa ara h
valueseterForVIsualSvg();//move nav tag upper,down..or visual apsent

StartinglodaerAnimation();//black screen animate or all..
time();
locomotiveaddforsmoth();//smooth scrolling using locomotive,or cards paralex efect

cardsHoveranimationBgchnage()//cards hover bg changes on hover






