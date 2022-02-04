import gsap from "gsap";

let tl = gsap.timeline();
let disableBG = () => {
  window.localStorage.setItem('bg', false);
  tl.to(".data", {
    background: "black",
  }).to("#scene-container", {
    display: "none",
  });
};
let enableBG = () => {
  window.localStorage.setItem('bg', true);
  tl.to("#scene-container", {
    display: "initial",
  }).to(".data", {
    background: "rgba(0, 0, 0, 0)",
  });
};

export { disableBG, enableBG };
