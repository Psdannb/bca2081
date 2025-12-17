let navgallery = document.querySelector("#navgalllery");
let gallerytext = document.querySelector("#galleryid");
navgallery.addEventListener("click", () => {
  //   gallerytext.style.backgroundColor = "red";
  gallerytext.classList.add("scale");
  setTimeout(removescale, 300);
});
function removescale() {
  gallerytext.classList.remove("scale");
}
