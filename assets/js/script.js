const cardContent = [
  {
    backgroundImg: "assets/images/f124.jpg",
    backgroundImgAlt: "f124",
    overlayLogo: "assets/images/f124-gametile-logo.png",
    overlayLogoAlt: "f124logo",
  },
  {
    backgroundImg: "assets/images/zau.jpg",
    backgroundImgAlt: "zau",
    overlayLogo: "assets/images/talesofkenzera-gamebox-logo-white-1x1.png",
    overlayLogoAlt: "zaulogo",
  },
  {
    backgroundImg: "assets/images/ufc5.jpg",
    backgroundImgAlt: "ufc5",
    overlayLogo: "assets/images/ufc-5-logo.png",
    overlayLogoAlt: "ufc5logo",
  },
  {
    backgroundImg: "assets/images/fc24.jpeg",
    backgroundImgAlt: "fc24",
    overlayLogo: "assets/images/fc24-gamebox-logo-white.png",
    overlayLogoAlt: "fc24logo",
  },
  {
    backgroundImg: "assets/images/sims4.jpg",
    backgroundImgAlt: "sims4",
    overlayLogo: "assets/images/the-sims-4-mono-logo.png",
    overlayLogoAlt: "sims4logo",
  },
  {
    backgroundImg: "assets/images/apex.jpg",
    backgroundImgAlt: "apex",
    overlayLogo: "assets/images/apex-legends-mono-logo.png",
    overlayLogoAlt: "apex1",
  },
];
const cardbox = document.querySelector("#cardbox");
let cards = "";
cardContent.forEach((element) => {
  cards = ` <div class="card">
            <img src=${element.backgroundImg} alt=${element.backgroundImgAlt} class="image" />
            <div class="overlay">Sito ufficiale</div>
            <img
              src=${element.overlayLogo}
              alt=${element.overlayLogoAlt}
              class="logo"
            />
          </div>`;
  cardbox.innerHTML += cards;
});
