const images = [
  {
    type: "gardenService",
    img: document.getElementById("Img1"),
  },
  {
    type: "gardenService",
    img: document.getElementById("Img5"),
  },
  {
    type: "lawnService",
    img: document.getElementById("Img3"),
  },
  {
    type: "plantingService",
    img: document.getElementById("Img2"),
  },
  {
    type: "plantingService",
    img: document.getElementById("Img4"),
  },
  {
    type: "plantingService",
    img: document.getElementById("Img6"),
  },
];
const btns = [
  {
    type: "gardenService",
    obj: document.querySelector("#gardenService"),
  },
  {
    type: "lawnService",
    obj: document.querySelector("#lawnService"),
  },
  {
    type: "plantingService",
    obj: document.querySelector("#plantingService"),
  },
];
const blur = new BlurHandler(btns, images);