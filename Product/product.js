const AllProducts = {
  Product1: {
    color: "red",
    title: "Man’s eqt shoe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: {
      main: "/Assets/Products/redMainChose.png",
      img1: "/Assets/Products/redImg1.png",
      img2: "/Assets/Products/redImg2.png",
      img3: "/Assets/Products/redImg3.png",
      img4: "/Assets/Products/redImg4.png",
      img5: "/Assets/Products/redImg5.png",
      img6: "/Assets/Products/redImg6.png",
    },
    price: "1200",
  },
  Product2: {
    color: "green",
    title: "Man’s eqt shoe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: {
      main: "",
      img1: "/Assets/Products/greenImg1.png",
      img2: "/Assets/Products/greenImg2.png",
      img3: "/Assets/Products/greenImg3.png",
      img4: "/Assets/Products/greenImg4.png",
      img5: "/Assets/Products/greenImg5.png",
      img6: "/Assets/Products/greenImg6.png",
    },
    price: "1200",
  },
  Product3: {
    color: "purحle",
    title: "Man’s eqt shoe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: {
      main: "",
      img1: "/Assets/Products/purpleImg1.png",
      img2: "/Assets/Products/purpleImg2.png",
      img3: "/Assets/Products/purpleImg3.png",
      img4: "/Assets/Products/purpleImg4.png",
      img5: "/Assets/Products/purpleImg5.png",
      img6: "/Assets/Products/purpleImg6.png",
    },
    price: "1200",
  },
};
const listItems = document.getElementsByClassName("listItem");
const ColorImages = document.getElementsByClassName("colorImg");
const addToCartBtn = document.getElementById("addToCarBtn");
const productPhoto = document.getElementById("mainChose");
const productName = document.getElementById("product_name");
const productDescription = document.getElementById("product_description");
const productPrice = document.getElementById("product_price");
const handleaddToCartBtn = function () {
  const photoSRC = productPhoto.getAttribute("src");
  const name = productName.textContent;
  const description = productDescription.textContent;
  const price = productPrice.textContent;
  const id = getLocalStorageLength() + 1;
  const size = document.querySelector(".active").textContent;

  const productObj = {
    photoSrc: photoSRC,
    productName: name,
    productDescription: description,
    productPrice: price,
    productId: id,
    productSize: size,
  };
  addProductToLocalStorage(productObj);
};

const getLocalStorageLength = function () {
  const cartData = window.localStorage.getItem("cart");
  if (cartData) {
    return JSON.parse(cartData).length;
  }

  return 0;
};

const addProductToLocalStorage = function (productObj) {
  if (window.localStorage.getItem("cart")) {
    const cartData = JSON.parse(window.localStorage.getItem("cart"));
    cartData.push(productObj);
    localStorage.setItem("cart", JSON.stringify(cartData));
    return;
  }
  const cartData = [productObj];
  localStorage.setItem("cart", JSON.stringify(cartData));
};
const handleOnActiveListItem = function (e) {
  Array.from(listItems).forEach((element) => {
    element.classList.remove("active");

    const currentColor = element.id;
  });

  e.currentTarget.classList.add("active");
};

function colorImgClickHandler(e) {
  if (e.target.classList.contains("activeColor")) return;

  Array.from(ColorImages).forEach((element) => {
    element.classList.remove("activeColor");

    const currentColor = element.id;
    element.src = `/Assets/ProductPage/color${currentColor}.png`;
  });

  e.target.classList.add("activeColor");
  e.target.src = `/Assets/ProductPage/colorActive.png`;
}

Array.from(listItems).forEach((element) => {
  element.addEventListener("click", handleOnActiveListItem);
});

Array.from(ColorImages).forEach((element) => {
  element.addEventListener("click", colorImgClickHandler);
});

addToCartBtn.addEventListener("click", handleaddToCartBtn);
