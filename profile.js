ImageFatch();
function ImageFatch(){
    var displayedImage = document.querySelector("#page2 img");
    // Get the image source URL from the URL parameters
    var urlParams = new URLSearchParams(window.location.search);
    var imageSource = urlParams.get("image");
    displayedImage.src = imageSource
}
gsap.to(".page1-bottom",{
    scrollTrigger:{
        trigger:"#page2 .page1-bottom",
        scroll:"#main",
        start:"top 71%",
        end:"top -1000%",
        pin:true,
        // markers:true,
        scrub:true
    }
})
gsap.to("#nav",{
    scrollTrigger:{
        trigger:"#nav",
        scroll:"#main",
        start:"top 2%",
        end:"top -70%",
        // pin:true,
        // markers:true,
        scrub:true
    },
    top:"0"
});
gsap.to("#nav svg",{
    scrollTrigger:{
        trigger:"#nav svg",
        scroll:"#main",
        start:"top 4%",
        end:"top -600%",
        // pin:true,
        // markers:true,
        scrub:true
    },
    y:"-200vh"
});
gsap.from("#page2 img",{
    scrollTrigger:{
        trigger:"#page2 img",
        scroll:"#main",
        start:"top 71%",
        end:"top -50%",
        // pin:true,
        // markers:true,
        scrub:true
    },
    top:"118%"
});


Page5();
function Page5(){
    var mouse = document.querySelector("#page5-mouse");
    document.querySelector("#page5").addEventListener("mouseenter",function(){
        mouse.style.scale = 1;
    })
    document.querySelector("#page5").addEventListener("mouseleave",function(){
        mouse.style.scale = 0;
    })
    window.addEventListener("mousemove",(dets)=>{
        let x = mouse.offsetWidth;
        let y = mouse.offsetHeight;
        mouse.style.transform = `translate(${dets.pageX - x/2}px,${dets.pageY - y/2}px)`;
    })
}

