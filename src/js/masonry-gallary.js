import Masonry from "masonry-layout";

window.onload = () => {
    const grid = document.querySelector(".gallery__list")

    const masonry = new Masonry(grid, {
        columnWidth: ".grid-sizer",
        gutter: '.gutter-sizer',
        itemSelector: ".gallery__item",
        percentPosition: true,
    })
}