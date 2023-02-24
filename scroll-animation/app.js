const texts = gsap.utils.toArray(".js-scroll-text");
texts.forEach((text) => {
  gsap.fromTo(
    text,
    {
      y: 40,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: text, //アニメーションが始まるトリガーとなる要素
        start: "top-=100px center", //アニメーションが始まる位置
      },
    }
  );
});

const images = gsap.utils.toArray(".js-scroll");
images.forEach((image) => {
  gsap.to(image, {
    y: -100,
    scrollTrigger: {
      trigger: image,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: true,
    },
  });
});
