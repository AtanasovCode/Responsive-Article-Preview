const shareIcon = document.querySelector(".icon-share");
const tooltips = document.querySelectorAll(".tooltip");
const container = document.querySelector(".share-container");

shareIcon.addEventListener("mouseover", () => {
    tooltips.forEach(tooltip => {
        tooltip.classList.toggle("active");
        container.classList.add("active");
    })
})


shareIcon.addEventListener("mouseleave", () => {
    tooltips.forEach(tooltip => {
        tooltip.classList.remove("active");
        container.classList.remove("active");
    })
})

//For Mobile Users

shareIcon.addEventListener("touchstart", () => {
    tooltips.forEach(tooltip => {
        tooltip.classList.toggle("active");
        container.classList.add("active");
    })
})


shareIcon.addEventListener("touchend", () => {
    tooltips.forEach(tooltip => {
        tooltip.classList.remove("active");
        container.classList.remove("active");
    })
})