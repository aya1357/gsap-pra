const text = new SplitType("#text"); /*テキストの分割*/

gsap.to(".char", {
  y: 0 /*テキストのY軸の操作*/,
  stagger: 0.05 /*テキスト間の遅延時間*/,
  delay: 0.2 /*アニメーションのスタートまでの遅延時間*/,
  duration: 0.5 /*アニメーションの時間*/,
});