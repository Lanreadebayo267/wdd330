import { setLocalStorage } from "./utils.mjs";
import ProductData from "./productData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  //1. Get existing cart from localStorage (or start empty array)
  let cart = JSON.parse(localStorage.getItem("so-cart")) || [];

  //2. Add the new product to the array
  cart.push(product);

  //3. Save back to localStorage as a JSON string
  setLocalStorage("so-cart", cart);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
