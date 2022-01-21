import gsap from "gsap";

let tl = gsap.timeline();
let disableBG = () => {
  tl.to(".data", {
    background: "black",
  }).to("#scene-container", {
    display: "none",
  });
};
let enableBG = () => {
  tl.to("#scene-container", {
    display: "initial",
  }).to(".data", {
    background: "rgba(0, 0, 0, 0)",
  });
};

export { disableBG, enableBG };
