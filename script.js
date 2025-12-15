const instaDiv = document.getElementById("instaIcon");
const menuDiv = document.getElementById("menuIcon");

instaDiv.addEventListener("click", () => {
  window.open("https://www.instagram.com/cafe_de_laz/", "_blank");
});

menuDiv.addEventListener("click", () => {
  window.open("https://cafedelazmenu.netlify.app/", "_blank");
});
