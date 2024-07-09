
function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }

      // follwoing line is not required to work pinning on touch screen

      /* pinType: document.querySelector(".smooth-scroll").style.transform
        ? "transform"
        : "fixed"*/
    });



    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

function scrollTrigger(){
    gsap.from(".elem h4",{
        x : 0,
        duration : 1,
        scrollTrigger:{
            trigger:".elem",
            scroller:".main",
            start:"top 80%",
            end:"top 10%",
            scrub:true,
    
        }
    })
}

function loadingAni(){
    var tl = gsap.timeline();
    tl.from(".page1",{
        opacity:0,
    
    })
    
    tl.from(".page1",{
        transform:"scaleX(0.7) scaleY(0.2) translateY(100%)",
        borderRadius:"50px",
        duration:2,
        ease:"expo.out"
    })
    
    tl.from(" .nav, .nav h3, .nav div",{
        opacity:0
    })
    
    tl.from(".headline h1,.headline p,.headline div",{
        opacity:0,
        stagger:0.2,
        duration:0.5
    })
    
}


function page1Ani() {
    var nav = document.querySelector(".nav");

    nav.addEventListener("mouseenter",function(){
        let t1 = gsap.timeline();
        
        t1.to(".nav-bot",{
            height : "21vh"
        })
        
       
        t1.to(".nav-elem h5",{
            display:"block",

        })
       
    })

    nav.addEventListener("mouseleave",function(){
        let t1 = gsap.timeline();
        
        t1.to(".nav-elem h5",{
            display:"none",

        })
       
        

        t1.to(".nav-bot",{
            height : "0vh",
            duration:0.6,
            
        })
    
        
   
    })
}
 

 function page2Ani(){
    var elems = document.querySelectorAll(".right-elem")
    elems.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            gsap.to(elem.childNodes[3],{
            opacity : 1,
            scale : 1
            
        })
    })

    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity: 0,
            scale :0
        })
    })

    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x: dets.x- elem.getBoundingClientRect().x - 50,
            y: dets.y- elem.getBoundingClientRect().y - 120
        })
    })


    })
 }


 function page3Ani(){
    var play = document.querySelector(".pg3-center");
    var video = document.querySelector(".page3 video");

        play.addEventListener("click",function(){
            video.play()
            gsap.to(video,{
                transform:"scaleX(1) scaleY(1)",
                opacity:1 
            })
        })
        
        video.addEventListener("click",function(){
            video.pause()
            gsap.to(video,{
                transform: "scaleX(0.5) scaleY(0)",
                opacity:0
                
            })
        })
 }


function page4Ani(){
    var video = document.querySelectorAll(".sec-right")
    video.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){

            elem.childNodes[3].style.opacity=1
            
            elem.childNodes[3].play()
            


        })

        elem.childNodes[3].addEventListener("mouseleave",function(){

            elem.childNodes[3].style.opacity=0
            elem.childNodes[3].load()


        })
    })
}



function page4bottomAni(){

    var bottom = document.querySelectorAll(".bottom-1")
    bottom.forEach(function(elem){
        elem.childNodes[7].addEventListener("mouseenter",function(){
            elem.childNodes[7].style.opacity=1
            elem.childNodes[7].play()
           
           
            
        })
        elem.childNodes[7].addEventListener("mouseleave",function(){
            elem.childNodes[7].style.opacity=0
            elem.childNodes[7].load()
            
            
        })
    })
}


 locomotive();

 page1Ani();

 page2Ani();

 page3Ani();

 page4Ani();

 page4bottomAni();

 scrollTrigger();

 loadingAni();




