for (let i = 0; i < 20; i++) {
  const request = "https://dummyjson.com/products/" + i;
  const content = document.getElementById("content");

  const fetching = async (request) => {
    const response = await fetch(request);
    const product = await response.json();
    // console.log(product);
    const card = document.createElement("div");
    card.className = "card " + product.id;
    const title = document.createElement("div");
    title.innerHTML = `<div class="title"><h1 id="title" class="roboto-regular">${product.title}</h1></div>`;
    const brand = document.createElement("div");
    brand.innerHTML = `<div class="brand"><h2 id="brand" class="roboto-regular">${product.brand}</h2></div>`;
    const category = document.createElement("div");
    category.innerHTML = `<div class="category"><p id="category" class="roboto-regular">${product.category}</p></div>`;
    const description = document.createElement("div");
    description.innerHTML = `<div id="description" class="description roboto-regular">${product.description}</div>`;
    card.innerHTML = `
  
  <div id="images" class="images">
  <div class="image"><img src="${product.images[0]}" alt="" srcset=""></div>
  <div class="image"><img src="${product.images[1]}" alt="" srcset=""></div>
  <div class="image"><img src="${product.images[2]}" alt="" srcset=""></div>
  <div class="image"><img src="${product.images[3]}" alt="" srcset=""></div>
  <div class="image"><img src="${product.images[4]}" alt="" srcset=""></div>
  <div class="image"><img src="${product.images[5]}" alt="" srcset=""></div>
  </div>
  <div>
    <table>
      <caption>
        Statistiques
      </caption>
      <thead>
        <tr>
          <th>Remise (%)</th>
          <th>Prix</th>
          <th>rang</th>
          <th>stock</th>
        </tr>
        <tr>
          <td id="discountPercentage" class="discountPercentage">${product.discountPercentage} %</td>
          <td id="price" class="price">${product.price}</td>
          <td id="rating" class="rating">${product.rating}</td>
          <td id="stock" class="stock">${product.stock}</td>
        </tr>
      </thead>
    </table>
  </div>`;

    content.appendChild(card);
  };
  fetching(request);
}
