const BillContainer = document.querySelector(".bill-container");
const totalPrice = document.querySelector("#total_price");
const onLoadPageBillContainerHandler = function () {
  const cartData = getLocalStorageCartData();

  if (cartData) {
    cartData.forEach((product) => {
      const productInfoInHTML = `
  <div class="bill-box" id="${product.productId}">
    <div class="box-image">
      <img src="${product.photoSrc}" alt="Product Image" />
    </div>
    <div class="bill-description">
      <p>${product.productName}</p>
    </div>
    <div class="bill-size">Size [${product.productSize || "N/A"}]</div> 
    <div class="bill-quantity">
      <input price=${
        product.productPrice
      } id="qty_counter" type="number" value="1" min="1" />
    </div>
    <div class="bill-price">
      <span>${product.productPrice}.LE</span>
    </div>
    <div class="bill-deleteBtn">
      <button class="delete_btn" id="${product.productId}">Delete</button>
    </div>
  </div>
`;

      BillContainer.insertAdjacentHTML("beforeend", productInfoInHTML);
    });
  } else {
    return;
  }
  const billTotalPrice = getBillTotalPrice(cartData);
  totalPrice.textContent = billTotalPrice;
};

const getLocalStorageCartData = function () {
  const cartData = window.localStorage.getItem("cart");
  if (cartData) {
    return JSON.parse(cartData);
  }

  return false;
};
const getBillTotalPrice = function (products) {
  console.log(products);
  return products.reduce((sum, product) => {
    return (sum += Number(product.productPrice));
  }, 0);
};

window.onload = onLoadPageBillContainerHandler;

document.addEventListener("click", (event) => {
  if (event.target && event.target.matches(".delete_btn")) {
    handleDeleteBtnClick(Number(event.target.id));
  } else if (event.target && event.target.matches("#qty_counter")) {
    let currentTotalPrice = Number(totalPrice.textContent);
    const quantity = Number(event.target.value);
    const price = Number(event.target.getAttribute("price"));

    let currentValue = event.target.getAttribute("current_value");
    currentValue = currentValue ? Number(currentValue) : 1;

    if (currentValue > quantity) {
      currentTotalPrice -= price * (currentValue - quantity);
    } else if (currentValue < quantity) {
      currentTotalPrice += price * (quantity - currentValue);
    }
    event.target.setAttribute("current_value", quantity);

    totalPrice.textContent = currentTotalPrice;
  }
});

const handleDeleteBtnClick = function (productID) {
  let cartData = getLocalStorageCartData();
  console.log(cartData);
  cartData = cartData.filter((product) => {
    return product.productId !== productID;
  });
  console.log(cartData);
  localStorage.setItem("cart", JSON.stringify(cartData));
  window.location.reload();
};
