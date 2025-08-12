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
