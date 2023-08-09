Loco("#main");
function Loco(main){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(main),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the main element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(main, {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(main).style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

Anim();
function Anim(){
    var tl = gsap.timeline();
    tl
    .to("#page1",{
        scrollTrigger:{
            trigger: "#page1",
            scroller:"#main",
            start: "top 1px",
            end: "bottom -4000%",
            scrub: 1,
            pin: true,
        }
    }).to("#page1 .circle",{
        scrollTrigger:{
            trigger: "#page1",
            scroller:"#main",
            start: "top 1px",
            end: "bottom -4000%",
            scrub: true,
            // pin: true,
        },
        rotate:-180
    })
    .from("#page1 .circle",{
            rotate:90,
            duration:4
        })
}
document.querySelectorAll(".circle-item").forEach((elem,index)=>{
    elem.style.transform = `translate(0%,-50%) rotate(-${index*22.5}deg)`
})

document.querySelectorAll(".circle-left img").forEach((imgCLick,index1)=>{
    // Add a click event listener to the image
    imgCLick.addEventListener("click", function() {
        var imageSource = imgCLick.src;
        var newPageURL = "profile.html?image=" + encodeURIComponent(imageSource);
        window.location.href = newPageURL;
    });
})


