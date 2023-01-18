import Masonry from "masonry-layout";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

window.onload = () => {
    const grid = document.querySelector(".gallery__list")

    const masonry = new Masonry(grid, {
        columnWidth: ".grid-sizer",
        gutter: '.gutter-sizer',
        itemSelector: ".gallery__item",
        percentPosition: true,
    })
}

let gallery = new SimpleLightbox('.gallery__list .gallery__item-link', {
    close: false,
    showCounter: false,
});