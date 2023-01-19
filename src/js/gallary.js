import Masonry from "masonry-layout";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const bodyWidth = document.querySelector('body').offsetWidth;

const masonryOptions = {
    columnWidth: ".grid-sizer",
    gutter: '.gutter-sizer',
    itemSelector: ".gallery__item",
    percentPosition: true,
}

const masonry = new Masonry(".gallery__list", masonryOptions)

const lightboxOptions = {
    close: bodyWidth < 768 ? false : true,
    nav: bodyWidth < 768 ? false : true,
    showCounter: false,
}

let gallery = new SimpleLightbox('.gallery__item-link', lightboxOptions);