gsap.registerPlugin(SplitText);

const video = document.querySelector(".background");

video.addEventListener("loadeddata", () => {
  setTimeout(() => {
    gsap.set(".content", { opacity: 1 });

    const split = new SplitText(".content", {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
    });

    gsap.from(split.lines, {
      duration: 0.9,
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "expo.out",
    });
  }, 1000); 

const content = document.querySelector(".credits");
setTimeout(() => {
  content.className = "credits3";
}, 2000);
  
});

