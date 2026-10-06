// generateProducts.js
import fs from "fs";
import path from "path";
import fetch from "node-fetch"; // Ya puedes usarlo porque lo instalaste

const API_URL = "https://fakestoreapi.com/products";
const OUTPUT_PATH = path.join("src", "assets", "products.json");

async function generateProducts() {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(products, null, 2), "utf-8");
    console.log("✅ Archivo products.json generado en src/assets.");
  } catch (error) {
    console.error("❌ Error al generar products.json:", error);
  }
}

generateProducts();
