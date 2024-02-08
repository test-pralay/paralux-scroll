const leaf = document.querySelector(".leaf");
const hill1 = document.querySelector(".hill1");
const hill2 = document.querySelector(".hill2");
const hill3 = document.querySelector(".hill3");
const hill4 = document.querySelector(".hill4");
const hill5 = document.querySelector(".hill5");
const plant = document.querySelector(".plant");
const text = document.querySelector(".text");
const tree = document.querySelector(".tree");
const aboutContainer = document.getElementById("about");
const skillsContainer = document.getElementById("skills");
const projects = document.getElementById("projects");
const totalHeight = document.body.scrollHeight;

window.addEventListener("scroll", () => {
    if(tween.isActive()  ) return;
    const scrollVal = window.scrollY;
    leaf.style.top = scrollVal * -2.5 + "px";
    leaf.style.left = scrollVal * 2.5 + "px";

    hill5.style.left = scrollVal * 1.5 + "px";
    hill4.style.left = scrollVal * -1.5 + "px";

    if (!(totalHeight < scrollVal * 3.5)) {
        text.style.marginTop = scrollVal * 2.5 + "px";
        hill1.style.top = scrollVal * 1.5 + "px";
    }
});

const container = document.querySelector(".container");
const items = gsap.utils.toArray(".container .item");

// const scrollTween = gsap.to(items, {
//     xPercent: -100 * (items.length - 1),
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".container",
//         pin: true,
//         scrub: 1,
//         end: "+=3000",
//     },
// });

gsap.from(hill1, {
    y: 300,
    opacity: 0,
    duraction: 2,
});
gsap.from(hill4, {
    x: -300,
    duraction: 2,
});
gsap.from(hill5, {
    x: 300,
    duraction: 2,
});
gsap.from(plant, {
    y: 100,
    duraction: 2
});

gsap.from(leaf, {
    opacity: 0,
    x: 200,
    y: -200,
    duraction: 2.5,
});

gsap.from(tree, {
    opacity: 0,
    y: 800,
    duraction: 2.5,
})

gsap.from(text, {
    opacity:0,
    y: 150,
})


const tween = gsap.from("header", {
    y: -500,
    opacity: 0,
    duraction: 20,
    ease: "power4.out",
});

const scrollTimeline = gsap.timeline({
    defaults: {
        ease: "none",
    },
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: "+=3000",
    },
});

scrollTimeline.to(".item", {
    xPercent: -100 * (items.length - 1),
});

items.forEach((stop, index) => {
    gsap.from(stop.querySelector(".project-contant"), {
        opacity: 0,
        yPercent: -50,
        ease: "elastic",
        scrollTrigger: {
            trigger: stop.querySelector(".project-contant"),
            start: "left 75%",
            end: "center center",
            containerAnimation: scrollTimeline,
            scrub: 0.5,
            // markers: true,
        },
    });
});
