const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


const products = [
  {
    id: 1,
    title: "بدل رجالى",
    price: 119,
    colors: [
      {
        code: "black",
        img: "img/color/menSuits/menSuits1.png",
      },
      {
        code: "darkblue",
        img: "img/color/menSuits/menSuits2.png",
      },
    ],
  },
  {
    id: 2,
    title: "حقائب نسائية",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "img/color/bags/bag1.png",
      },
      {
        code: "green",
        img: "img/color/bags/bag2.png",
      },
    ],
  },
  {
    id: 3,
    title: "ملابس اطفال",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "img/color/children/children1.png",
      },
      {
        code: "green",
        img: "img/color/children/children2.png",
      },
    ],
  },
  {
    id: 4,
    title: "ساعات يد",
    price: 129,
    colors: [
      {
        code: "black",
        img: "img/color/hours/hours1.png",
      },
      {
        code: "lightgray",
        img: "img/color/hours/hours2.png",
      },
    ],
  },
  {
    id: 5,
    title: "كاميرات تصوير",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "img/color/camera/camera1.png",
      },
      {
        code: "black",
        img: "img/color/camera/camera2.png",
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

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    // تغيير شريط التمرير للصور 
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    // تغير المنتجات بالاسفل
    choosenProduct = products[index];

    //change texts of currentproduct
    // تغيير الكتابة والسعر والصور
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    // تغيير لون المنتج
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});


currentProductColors.forEach(
  (color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });

  });


currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {

    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "#b87e31";
    });
    size.style.backgroundColor = "#b87e31";
    size.style.color = "white";

  });
})


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");


productButton.addEventListener("click",()=>{
  payment.style.display = "flex"
})

close.addEventListener("click",()=>{
  payment.style.display = "none"
})