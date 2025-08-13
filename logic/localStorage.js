export const getLocalStorageCartData = function () {
  let cartData = window.localStorage.getItem("cart");
  if (!cartData) return false;
  try {
    cartData = JSON.parse(cartData);
  } catch (e) {
    console.log("Cannot Parse Cart Data ", e);
    return false;
  }
  if (Array.isArray(cartData) && cartData.length) {
    return cartData;
  }

  return false;
};
