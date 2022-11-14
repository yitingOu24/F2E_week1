gsap.registerPlugin(ScrollTrigger, TextPlugin);




gsap.from('.logo',{x:100, opacity:0 ,duration:1.5})

// icon-css
// const timeline = gsap.timeline()
// timeline.to('.icon-css', {x: 400, duration:1.5})
// timeline.to('.icon-css', {y: 200, duration:1})


// 一打開就移動
// gsap.to('.icon-figma', {y: -100, duration:1})

// icon-animate
// const timelineA = gsap.timeline()
// timelineA.to('.icon-animate', {y: 200, duration:1.5})
// timelineA.to('.icon-animate', {x: -200, duration:1})

// gsap.to('.icon-idea', {x: 100, duration:1.5})

// // tree
// const timelineTree = gsap.timeline()
// timelineA.to('.icon-tree', {y: 100, duration:1.5})
// timelineA.to('.icon-tree', {x: 300, duration:1})


// 隨著滑鼠移動
const iconCss = gsap.timeline({
      scrollTrigger: {
        trigger: ".icon-css", 
        markers: false, 
        start: 'top 20%',
        end: 'top 1%', 
        scrub: true, 
      },
    })
    iconCss.to('.icon-css', {
      top: '9%', 
      left: '3%',
      xPercent: '520', 
      duration: 20, 
      position: 'absolute',

    })

const iconHtml = gsap.timeline({
      scrollTrigger: {
        trigger: ".icon-html", 
        markers: false, 
        start: 'top 35%',
        end: 'top 0%', 
        scrub: true, 
      },
    })
    iconCss.to('.icon-html', {
      top: '35%', // 距外層容器top
      right: '20%', // 距外層容器left
      xPercent: '180',
      duration: 15, 
      position: 'absolute',
    }).to('.icon-html', {
      yPercent: '-150',
      duration: 15,
      position: 'absolute',
    }).to('.icon-adobe', {
      xPercent: '200',
      duration: 15,
      position: 'absolute',
    }).to('.icon-adobe', {
      yPercent: '400',
      duration: 30,
      position: 'absolute',
    })

const iconJs = gsap.timeline({
      scrollTrigger: {
        trigger: ".icon-js", 
        markers: false, 
        start: 'top 50%',
        end: 'top 0%', 
        scrub: true, 
      },
    })
    iconJs.to('.icon-js', {
      top: '64%', 
      right: '1%',
      yPercent: '270', 
      duration: 10, 
      position: 'absolute',
    }).to('.icon-js', {
      xPercent: '-60', 
      duration: 10,
      position: 'absolute',
    }).to('.icon-figma', {
      yPercent: '-90', 
      duration: 10,
      position: 'absolute',
    })


  const iconAnimate = gsap.timeline({
      scrollTrigger: {
        trigger: ".icon-animate", 
        markers: false, 
        start: 'top 50%',
        end: 'top 0%', 
        scrub: true, 
      },
    })
    iconAnimate.to('.icon-animate', {
      top: '-7%', 
      right: '23%',
      yPercent: '310', 
      duration: 10, 
      position: 'absolute',
    }).to('.icon-animate', {
      xPercent: '-100', 
      duration: 10, 
      position: 'absolute',
    })


  const iconIdea = gsap.timeline({
      scrollTrigger: {
        trigger: ".icon-idea", 
        markers: false, 
        start: 'top 50%',
        end: 'top 0%', 
        scrub: true, 
      },
    })
    iconIdea.to('.icon-idea', {
      top: '47%', 
      right: '47%',
      xPercent: '-440', 
      duration: 20, 
      position: 'absolute',
    }).to('.icon-idea', {
      yPercent: '100', 
      duration: 20, 
      position: 'absolute',
    }).to('.icon-idea', {
      yPercent: '100', 
      duration: 20, 
      position: 'absolute',
    }).to('.icon-tree', {
      xPercent: '530', 
      duration: 20, 
      position: 'absolute',
    })





 
// 視差捲動

const srollTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".gate-section", 
    start:'top 40%',
    pin: true, //重要！ pin需設為true
    markers: false,
    scrub: true,
  },
});

srollTL.to(".left-1", { yPercent: "-140" });
srollTL.to(".right-1", { yPercent: "100" }, "<");




// loop

gsap.to(".cus-loop", {
    xPercent: "-50", 
    ease: "none",
    duration: 10,
    repeat: -1,
  });

