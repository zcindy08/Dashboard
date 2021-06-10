//IMPORTS
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
//register Plugins
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, MotionPathPlugin);
//**** SELECT ELEMENTS without jQuery ****\\

// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  let mainTL = gsap.timeline({id:"main"});

  MorphSVGPlugin.convertToPath("rect, line");
  

  function init(){
    //***********  gps init ****************
    gsap.set("#gpslinemask",{alpha:0})
    gsap.set("#gpspointer",{alpha:0})
    gsap.set("#speedlimit",{alpha:0})
    gsap.set("#direction",{alpha:0})
    gsap.set("#GPSLayout",{alpha:0})
    gsap.set("#gpscar",{alpha:0})
    gsap.set("#G-P-S",{alpha:0})

    gsap.set("#musicbar, #musicplayer, #San-Holo",{alpha:0})
    //***********  headlights draw init ****************
    gsap.set("#Stroke-left",{drawSVG:"50% 50%"})
    gsap.set("#Stroke-right",{drawSVG:"50% 50%"})
    gsap.set("#leftlight, #rightlight",{alpha:0})
    
    //***********  logo and dashboard appear init ****************
    gsap.set("#elantra-e, #elantra-l, #elantra-a , #elantra-n , #elantra-t, #elantra-r, #elantra-a2",{alpha:0})
    gsap.set("#topRect",{alpha:1, y:"0"})
    gsap.set("#bottomRect",{alpha:1, y:"0"})
  
    gsap.set("#logo",{alpha:1, scale:1, transformOrigin:"center center"})
    
    //***********  leftspeedometer init ****************
    gsap.set("#gasfillmask",{x:150, y:450})
    gsap.set("#leftspeedfill",{alpha:0})
    gsap.set("#leftspeedstroke",{alpha:0})
    gsap.set("#leftpointer",{alpha:1, transformOrigin:"75% 75%"})
    gsap.set("#leftpointercircle",{alpha:0})

    gsap.set("#leftnumbers",{alpha:0})
    gsap.set("#Stroke-259, #Stroke-261, #Stroke-263, #Stroke-265, #Stroke-267, #Stroke-269, #Stroke-271, #Stroke-273, #Stroke-275",{alpha:0})  
    gsap.set("#barborder",{alpha:0})
    gsap.set("#gasfillbar",{alpha:0})
    gsap.set("#gaslight",{alpha:0})

    //***********  rightspeedometer init ****************
    gsap.set("#rightspeedfill",{alpha:0})
    gsap.set("#rightspeedstroke",{alpha:0})
    gsap.set("#rightpointer",{alpha:1, transformOrigin:"75% 75%"})
    gsap.set("#rightpointercircle",{alpha:0})

    gsap.set("#rightnumbers",{alpha:0})
    gsap.set("#Stroke-296, #Stroke-298, #Stroke-300, #Stroke-302, #Stroke-304, #Stroke-306, #Stroke-308, #Stroke-310, #Stroke-312",{alpha:0})  
    gsap.set("#tempbar",{alpha:0})
    gsap.set("#tempfillbar",{alpha:0})
    gsap.set("#templight",{alpha:0})

    //***********  warninglights & topdash init ****************
    gsap.set("#warninggroup1, #warninggroup2",{alpha:1})
    gsap.set("#date, #time",{alpha:0})
    gsap.set("#park",{alpha:0})
    gsap.set("#drive",{alpha:0})

    //*********** options init ****************
    gsap.set("#glow1, #glow2, #glow3",{alpha:0})
    gsap.set("#option",{alpha:1, x:+5})
    gsap.set("#tirepressureoption",{alpha:0})
    gsap.set("#weathercard", {alpha:0})

  }
  

  //Nested Timelines
  //***********  headlights  ****************
  function headlightTL(){
    let tl = gsap.timeline()
    tl.to("#leftlight",{delay:1, duration:1.5, alpha:1},"light")
      .to("#rightlight",{duration:1.5, alpha:1},"<")
      .to("#Stroke-left",{duration:1, drawSVG:"100%"},"lightoutline")
      .to("#Stroke-right",{duration:1, drawSVG:"100%"},"lightoutline")
      .to("#leftlight",{fill:"#5C819B"},"change")
      .to("#rightlight",{fill:"#5C819B"},"change")
    ;
    return tl;
  }

  //*********** dashboard ****************
  function ElantraTL(){
    let tl = gsap.timeline()
    tl.to("#elantra-e, #elantra-l, #elantra-a , #elantra-n , #elantra-t, #elantra-r, #elantra-a2",{alpha:1, stagger:0.2})
      .from("#topRect",{alpha:0, duration:1, y:"-500"},"dashload")
      .from("#bottomRect",{alpha:0, duration:1, y:"+500"}, "dashload")
      
      .to("#leftlight",{alpha:0},"lightoff")
      .to("#rightlight",{alpha:0},"lightoff")
      .to("#Stroke-left",{alpha:0},"lightoff")
      .to("#Stroke-right",{alpha:0},"lightoff")

      .from("#logo",{duration:1, scale:10, alpha:0},"dashload+=1")
      
    ;
    return tl;
  }

  //*********** speedometer ****************
  function LeftSpeedTL(){ 
    let tl = gsap.timeline()
    .fromTo("#leftspeedstroke",{alpha:1, duration:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}) 
    .to("#Stroke-259, #Stroke-261, #Stroke-263, #Stroke-265, #Stroke-267, #Stroke-269, #Stroke-271, #Stroke-273, #Stroke-275",{alpha:1, stagger:0.15},"drawspeedometer")  
    .to("#leftnumbers",{duration:1, alpha:1}, "numberfade") 
    .to("#leftspeedfill",{alpha:1})
    .to("#leftpointercircle",{alpha:1})
    .to("#barborder",{alpha:1, duration:1}, "numberfade")
    .from("#leftpointer",{alpha:0, duration:2, rotate:"180deg"},"leftpoint")
    .to("#gasfillbar",{duration:3, alpha:1})
    ;
    return tl;
  }


  function RightSpeedTL(){ 
    let tl = gsap.timeline()
    .fromTo("#rightspeedstroke",{alpha:1, duration:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}) 
    .to("#Stroke-296, #Stroke-298, #Stroke-300, #Stroke-302, #Stroke-304, #Stroke-306, #Stroke-308, #Stroke-310, #Stroke-312",{alpha:1, stagger:0.15},"drawspeedometer")  
    .to("#rightnumbers",{duration:1, alpha:1}, "rightnumberfade") 
    .to("#rightspeedfill",{alpha:1})
    .to("#rightpointercircle",{alpha:1})
    .to("#tempbar",{alpha:1, duration:1}, "rightnumberfade")
    .from("#rightpointer",{alpha:0, duration:2, rotate:"180deg"},"rightpoint")
    .to("#tempfillbar",{duration:3, alpha:1})
    
    .to("#logo",{alpha:0},"drawspeedometer")
    ;
    return tl;
  }
  //*********** warning light & time and date ****************
  function warningTL(){
    let tl = gsap.timeline()
    .from("#warninglights",{alpha:0, duration:0.5, yoyo:"true", repeat:4},"drawspeedometer")
    .to("#gaslight, #templight",{alpha:1, duration:0.5, yoyo:true, repeat:2},"<+=1.5")
    .to("#warninglights",{alpha:0, duration:0.5})
    
    
    .to("#date",{alpha:1, duration:0.5})
    .to("#time",{alpha:1, duration:0.5},"<-=0.75")
    
    .to("#park",{alpha:1, duration:0.5, ease:"expo", y:"+55"})

    ;
    return tl;
  }

    //*********** options menu ****************
    function optionsTL(){
      let tl = gsap.timeline()
      tl.from("#options",{alpha:0, duration:2, x:+15})
        .to("#musicbar, #musicplayer, #San-Holo",{alpha:1, x:-170})
        .to("#glow1",{alpha:1, ease:"expo"},"settingglow")
        .to("#tirepressureoption",{alpha:1, duration:0.5},"settingglow")
        .to("#tirepressureoption",{duration:1, y:"300"})

        .to("#glow1",{delay:1, alpha:0, ease:"expo"},"+=0.5")
        .to("#tirepressureoption",{duration:1, y:"610"},"<")
        
      ;
      return tl;
    }
  
  //*********** weathercard menu ****************
  function weathercardTL(){
    let tl = gsap.timeline()
    tl.to("#tirepressureoption",{alpha:0})
    .to("#glow2",{alpha:1, ease:"expo"},"<")
    .to("#weathercard",{alpha:1, duration:1},"<")
    .to("#weathercard",{duration:1, y:"300"})

    .to("#glow2",{delay:0.5, alpha:0, ease:"expo"},"+=0.5")
    .to("#weathercard",{duration:1, y:"610"},"<")

    ;
    return tl;
  }

    //*********** MapGPS menu ****************
    function GPSTL(){
      let tl = gsap.timeline()
      tl.to("#weathercard",{alpha:0})

      .to("#glow3",{alpha:1, ease:"expo"})
      .to("#G-P-S",{alpha:1},"<")
      .to("#gpslinemask",{alpha:1})
      .to("#GPSLayout",{alpha:1},"<")
      .to("#gpslinemask",{duration:3, scaleY:"0", ease:"expo.out"},"<")
      .to("#gpscar",{alpha:1},"<+=1")
      .to("#speedlimit",{alpha:1},"speedlimit")
      .to("#G-P-S",{duration:1, x:+150})
      .to("#direction",{alpha:1},"<+=0.5")
      .to("#gpspointer",{alpha:1},"speedlimit")
     
      .to("#park",{alpha:0, duration:0.5, ease:"expo", y:"-55"})
      .to("#drive",{alpha:1, duration:0.5, ease:"expo", y:"+110"})

      .to("#rightpointer",{duration:3, rotation:0.5},"driving-=0.25")
      .to("#leftpointer",{duration:3, rotation:10},"driving")
      .to("#leftpointer",{delay:2, duration:5, rotate:"-90deg"},"slowing")
      .to("#rightpointer",{duration:5, rotate:"-90deg"},"driving+=4")

      .to("#gpspointer",{duration:12,motionPath:{path:"#pointerpath",align:"self", autoRotate:"90",ease:"circ.out"}},"driving")
      .to("#drive",{alpha:0})
      .to("#park",{alpha:1, duration:0.5, ease:"expo", y:"+55"},"<+=0.25")
      
      

      ;
      return tl;
    }



  //1. set initial properties
  init();

  //2. show content - prevents FOUC
  gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
 mainTL.add(headlightTL())  
       .add(ElantraTL())
       .add(LeftSpeedTL(),"speedo")
       .add(warningTL(),"speedo+=1")
       .add(RightSpeedTL(),"speedo")
       .add(optionsTL(),"-=2")
       .add(weathercardTL())
       .add(GPSTL())



  ;//tl END





});
