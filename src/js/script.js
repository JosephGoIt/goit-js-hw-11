import { BASE_URL, options } from "./pixabay-api.js";
import axios from "axios";
import { Notify } from "notiflix";
import simpleLightbox from "simplelightbox";

//ELEMENTS
const galleryEl = document.querySelector(".gallery");
const searchInputEl = document.querySelector('input[name="searchQuery"]');
const searchFormEl = document.querySelector("search-form");



function handleSubmit(e) {
    e.preventDefault();
    options.params.q = searchInputEl.ariaValueMax.trim();


}