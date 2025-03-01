//text animation

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

revealToSpan();


//animation using gsap

var tl=gsap.timeline();

tl
.from(".child span",{
    x:100,
    delay:1,
    stagger:.2,
    duration:1.4,
    ease:Power3.easeInOut

})
.to(".parent .child",{
    y:"-100%",
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
    ease:Circ.easeInOut
})


