const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "IPHONE",
    price: 419,
    link: "#iphone",
    colors: [
      {
        code: "black",
        img: "./images/iphone/15pro/iphone-15-pro-black.png",
      },
      {
        code: "#5c5acb",
        img: "./images/iphone/15pro/iphone-15-pro-blue.png",
      },
    ],
  },
  {
    id: 2,
    title: "SAMSUNG",
    price: 349,
    link: "#samsung",
    colors: [
      {
        code: "#111",
        img: "./images/Samsung/s23ultra/s-23-ultra-black-1.png",
      },
      {
        code: "#777",
        img: "./images/Samsung/s23ultra/s-23-ultra-grey-1.png",
      },
    ],
  },
  {
    id: 3,
    title: "OPPO",
    price: 309,
    link: "#oppo",
    colors: [
      {
        code: "#222",
        img: "./images/oppo/reno11pro/oppo-11-pro-black-1.png",
      },
      {
        code: "#6bdbca",
        img: "./images/oppo/reno11pro/oppo-11-pro-green-1.png",
      },
    ],
  },
  {
    id: 4,
    title: "XIAOMI",
    price: 329,
    link: "#xiaomi",
    colors: [
      {
        code: "black",
        img: "./images/xiaomi/k70pro/k-70-pro-black-1.png",
      },
      {
        code: "#23e39e",
        img: "./images/xiaomi/k70pro/k-70-pro-green-1.png",
      },
    ],
  },
  {
    id: 5,
    title: "REALME",
    price: 299,
    link: "#realme",
    colors: [
      {
        code: "black",
        img: "./images/realmi/11pro/11-pro-black-2.png",
      },
      {
        code: "darkgreen",
        img: "./images/realmi/11pro/11-pro-green-2.png",
      },
    ],
  },
];


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductMore = document.querySelector(".moreop");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductMore.href = choosenProduct.link ;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
