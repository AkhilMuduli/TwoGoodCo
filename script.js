function init(){
    if (window.innerWidth <= 768 || window.innerWidth <= 1200 || window.innerWidth <= 1920){
      gsap.registerPlugin(ScrollTrigger);

    
    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
    }

}

init()

function videoconAnime() {
  var videocon = document.querySelector('.video_container')
var playbtn = document.querySelector('.play')
videocon.addEventListener('mouseenter', ()=>{
  gsap.to(playbtn,{
    scale:1,
    opacity:1
  })
})
videocon.addEventListener('mouseleave',()=> {
  gsap.to(playbtn,{
    scale:0,
    opacity:0
  })
})
videocon.addEventListener('mousemove', (dets)=>{
  playbtn.style.zIndex = '10'
  gsap.to(playbtn,{
    left:dets.x,
    top:dets.y
  })
})
}
// videoconAnime()


function loadingAnime() {
  gsap.from('#page1 h1',{
    y:300,
    stagger:.3
  })
  gsap.to('.layer2 img',{
    y:-80,
    scrollTrigger:{
      trigger:'.layer2 img',
      scroller: '.main',
      start:'top top',
      end:'top 5%',
      scrub:.7
    }
  })
  gsap.to('.marquee h2',{
    y:-80,
    scrollTrigger:{
      trigger:'.layer2 img',
      scroller: '.main',
      start:'top top',
      end:'top 5%',
      scrub:.7
    }
  })
  gsap.to('#nav .layer3 p',{
    y:-40,
    scrollTrigger:{
      trigger:'#nav .layer3 p',
      scroller: '.main',
      start:'top top',
      end:'top 5%',
      scrub:.7
    }
  })
}
loadingAnime()





document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const items = document.querySelectorAll(".slider-item");
  const containerWidth = document.querySelector(".slider-container").offsetWidth;
  const itemsAttr = document.querySelector('.slider-item').getAttribute('match');
  const btns = document.querySelectorAll('.slider-item .radio_child .radio_btn');
  const btn = document.querySelector('.slider-item .radio_child .radio_btn');
  const textContainer = document.getElementById('text-container');
  const marquee = document.querySelectorAll('.marquee6');

  const uline = document.querySelectorAll('.underline');

  const mark6 = document.getElementById('mark6')
  uline.forEach(e=>{
    e.style.scale = '0'
  })

  btn.style.backgroundColor = '#000'
  textContainer.innerHTML = `${mark6.innerHTML}`;

  items.forEach((item,index) => {
      item.addEventListener("click", () => {
          const itemWidth = item.offsetWidth;
          const itemLeft = item.offsetLeft;
          const itemCenter = itemLeft + (itemWidth / 2);
          const scrollTo = itemCenter - (containerWidth / 2);
          slider.style.transform = `translateX(${-scrollTo}px)`;
          

  
          const centerItem = item.getAttribute('match');
          uline.forEach(ul => {
            ul.style.scale = '0';
            const ulAttr = ul.getAttribute('btnId')
            if (itemCenter && centerItem === ulAttr){
              ul.style.scale = '1';
            }
          })


          marquee.forEach(mark => {
            const markAttr = mark.getAttribute('btnId')
            if (itemCenter && centerItem === markAttr){
              textContainer.innerHTML = `${mark.innerHTML}`
            }
          })


          btns.forEach(btn => {
            const id = btn.getAttribute('btnId');
            if (itemCenter && centerItem === id){
              btn.style.backgroundColor = '#000'
            }else{
              btn.style.backgroundColor = '#F7F7F7'
            }


          })

          textContainer.classList.add('show');




      });
  });
  
});















































// document.addEventListener('DOMContentLoaded', () => {
//   const slider = document.querySelector('.slider');
//   const sliderItems = document.querySelectorAll('.slider-item');
//   const textContainer = document.getElementById('text-container');

//   sliderItems.forEach((item, index) => {
//       item.addEventListener('click', () => {
//           // Center the clicked item
//           const itemWidth = item.offsetWidth;
//           const offset = -(itemWidth * index) + (slider.parentElement.offsetWidth / 2) - (itemWidth / 2);
//           slider.style.transform = `translateX(${offset}px)`;

//           // Show the text below the slider
//           textContainer.textContent = `You clicked on ${item.textContent}`;
//           textContainer.classList.add('show');
//       });
//   });
// });

























