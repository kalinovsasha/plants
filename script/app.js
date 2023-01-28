// Blur
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

// OrderMenu
const priceContainer = document.querySelector(".price__items-container");
const orderItems = [
  {
    id: "priceCheap",
    obj: document.getElementById("priceCheap"),
  },
  {
    id: "priceMedium",
    obj: document.getElementById("priceMedium"),
  },
  {
    id: "priceExpensive",
    obj: document.getElementById("priceExpensive"),
  },
];

const itemContainers = [
  {
    id: "priceCheap",
    obj: document.getElementById("itmBasic"),
  },
  {
    id: "priceMedium",
    obj: document.getElementById("priceStandard"),
  },
  {
    id: "pricePro",
    obj: document.getElementById("pricePro"),
  },
];

const dropArrows = document.querySelectorAll(".price__items__item__arrow");
dropArrows.forEach((el) => {
  el.addEventListener("click", (el) =>
    orderMenu.open(Number(el.target.id.slice(5)))
  );
});
const orderMenu = new OrderMenu(orderItems, itemContainers, priceContainer);
