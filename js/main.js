const request = "https://dummyjson.com/products/1";
const titleDiv = document.getElementById("title");
const brandDiv = document.getElementById("brand");
const categoryDiv = document.getElementById("category");
const descriptionDiv = document.getElementById("description");
const discountPercentageDiv = document.getElementById("discountPercentage");
const imagesDiv = document.getElementById("images");
const priceDiv = document.getElementById("price");
const ratingDiv = document.getElementById("rating");
const stockDiv = document.getElementById("stock");

const fetching = async (request) => {
  const response = await fetch(request);
  const product = await response.json();
  console.log(product);
  titleDiv.textContent = product.title;
  brandDiv.textContent = product.brand;
  categoryDiv.textContent = product.category;
  descriptionDiv.textContent = product.description;
  discountPercentageDiv.textContent = `${product.discountPercentage} %`;
  for (let i = 0; i < product.images.length; i++) {
    const downloadingImage = new Image();
    downloadingImage.src = product.images[i];
    downloadingImage.onload = () => {
      image.src = this.src;
    };
    downloadingImage.id = "image" + i;
    const newDiv = document.createElement("div");
    newDiv.className = "image";
    newDiv.appendChild(downloadingImage);
    imagesDiv.appendChild(newDiv);
  }
  priceDiv.textContent = `${product.price} €`;
  ratingDiv.textContent = product.rating;
  stockDiv.textContent = product.stock;
};
fetching(request);
