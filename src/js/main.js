// src/js/main.js

import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { qs } from "./utils.mjs";

//get category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// select product container
const productContainer = qs("#product-list");

// only run on product listing page
if (productContainer && category) {
    const dataSource = new ProductData(category);
    const productList = new ProductList(category, dataSource, productContainer);

    // update page title
    const title = qs("#category-title");
    if (title) {
        title.textContent = category.replace("-", " ").toUpperCase();
    }

    productList.init();
}