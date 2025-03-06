//span convert into reveal for text animationb(1)

function revealToSpan(){

    document.querySelectorAll(".revel")

    .forEach(function(elem){
    //create teo span parent or child..
    let parent=document.createElement("span");
    let child=document.createElement('span');

    //parent and child both sets theri respective classes
    parent.classList.add("parent");
    child.classList.add("child");

    
    //span parent get child and child gets elem details.
    child.innerHTML=elem.innerHTML;
    parent.appendChild(child);

    //elem replace its value with parent span..
    elem.innerHTML="";
    elem.appendChild(parent);

});

}

//value seter for svg..or animation(2)

function valueseter(){
       //revel animation value jidden to start of homepage
        gsap.set("#nav a",{y:"-100%",opacity:0 });
        gsap.set("#home span .child ",{y:"100%"});
        gsap.set("#home .row img ",{ opacity:0 });
  
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

function lodaerAnimation(){
    
var tl=gsap.timeline();

tl
.from("#fs .child span",{
    x:100,
    stagger:.2,
    duration:1.4,
    ease:Power3.easeInOut

})
.to("#fs .parent .child",{
    y:"-110%",
    duration:1,
    ease:Circ.easeInOut

})

//black
//loding animation--------------
.to("#fs",{
    height:0,
    duration:1,
    ease:Circ.easeInOut
})

//greendiv
.to("#elem",{
    height:"100%",
    top:0,
    duration:1,
    delay:-.8,
    ease:Circ.easeInOut
})
.to("#elem",{
    height:"0%",
    duration:1,
    delay:-.5,
    ease:Circ.easeInOut,
    onComplete:function(){
       anamitionHomepage();
    }
})
}

//svg animation(4)

function animateSVG() {
  
  
    // Animate paths or polyline inside <g> elements
    gsap.to("#Visual g g path, #Visual g g polyline", {
      strokeDashoffset: 0,
      duration: 2,
      ease: Expo.easeInOut,
    
    });
 }
//   homepage animation(5)

function anamitionHomepage(){
    gsap.set("#nav a",{y:"-100%",opacity:0 });
    gsap.set("#home span .child ",{y:"100%"});
    gsap.set("#home .row img ",{ opacity:0 });
    

     let tl=gsap.timeline();
     tl
     .to("#nav a",{
        y:0,
        opacity:1,
        stagger:.05,
        ease:Expo.easeInOut
     })
     .to("#home .parent .child",{
        y:0,
        stagger:.01,
        duration:1.5,
        ease:Expo.easeInOut
     })
     .to("#home .row img",{
        opacity:1,
        ease:Expo.easeInOut,
        delay:-.5,
        onComplete:function(){
            animateSVG();
        }
     })
     

}

revealToSpan();//class reval convert into span
valueseter();//move nav tag upper,down..or visual apsent
lodaerAnimation();//black screen animate or all..




