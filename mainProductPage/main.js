const listItems = document.getElementsByClassName("listItem");
const ColorImages = document.getElementsByClassName("colorImg");
const addToCartBtn = document.getElementById("addToCarBtn");
const productPhoto = document.getElementById("main-Product-Photo");
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
    productPrice: price,
    productId: id,
    productSize: size,
  };
  addProductToLocalStorage(productObj);
  alert("Added to cart successfully ✅");
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

// Break

const getColorCode = function (color) {
  switch (color) {
    case "red": {
      return "#FF423C";
    }
    case "green": {
      return "#00E209";
    }
    case "purple": {
      return "#E13AAD";
    }
  }
};

const getColorlinear_gradient = function (color) {
  switch (color) {
    case "red": {
      return "linear-gradient(to bottom, #ff6363, #ffffff)";
    }
    case "green": {
      return "linear-gradient(to bottom, #71ff00, #7a8675)";
    }
    case "purple": {
      return "linear-gradient(to bottom, #ff1dad, #7a8675)";
    }
  }
};

const params = new URLSearchParams(window.location.search);

const mainProductPhoto = document.getElementById("main-Product-Photo");
const productCard = document.getElementById("product-Card");
const pageBackground = document.querySelector(".page ");
const productContainerImages = document.querySelectorAll(
  ".productImageContainer img"
);

const PageRenderHandler = function () {
  mainProductPhoto.src = "";
  const productColor = params.get("color");
  const productColorCode = getColorCode(productColor);
  console.log("colorCode", productColorCode);
  mainProductPhoto.src = `/Assets/Products/${productColor}MainChose.png`;
  productCard.style.backgroundColor = productColorCode;
  pageBackground.style.backgroundImage = `url("/Assets/ProductPage/${productColor}bgImg.png")`;
  document.documentElement.style.setProperty(
    "--main-color",
    getColorCode(productColor)
  );
  document.documentElement.style.setProperty(
    "--linear-bg-color",
    getColorlinear_gradient(productColor)
  );

  productContainerImages.forEach((img, index) => {
    img.src = `/Assets/Products/${productColor}Img${index + 1}.png`;
  });
};

window.onload = PageRenderHandler;
