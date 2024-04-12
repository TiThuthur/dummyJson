const request = "https://dummyjson.com/products";
const content = document.getElementById("content");

// fonction qui appel l'url de dummyjson en async avec l'url dans request
const fetching = async (request) => {
  const response = await fetch(request);
  const productsObj = await response.json();
  const products = productsObj.products;
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card " + product.id;
    const cardContent = document.createElement("div")
    const title = document.createElement("div");
    title.className = "title";
    title.innerHTML = `<h1 id="title" class="roboto-regular">${product.title}</h1>`;
    const brand = document.createElement("div");
    brand.className = "brand";
    brand.innerHTML = `<h2 id="brand" class="roboto-regular">${product.brand}</h2>`;
    const category = document.createElement("div");
    category.className = "category";
    category.innerHTML = `<p id="category" class="roboto-regular">${product.category}</p>`;
    const description = document.createElement("div");
    description.id = "description";
    description.className = "description roboto-regular";
    description.innerText = `${product.description}`;

    const cardImageAndTable = document.createElement("div")
    const images = document.createElement("div");
    images.className = "images";

      let imageDiv = document.createElement("div");
      let imgBalise = document.createElement("img");
      imgBalise.src = product.images[0]; //pour chaques éléments du tableau on met l'url dans le champs img.src
      imageDiv.className = "image";
      imageDiv.appendChild(imgBalise);
      images.appendChild(imageDiv); //on ajoute à la div avant de refaire une boucle

    const table = document.createElement("div");
    table.innerHTML = `<table>
        <caption>
          Statistiques
        </caption>
        <thead>
          <tr>
            <th>Remise</th>
            <th>Prix</th>
            <th>Rang</th>
            <th>Stock</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td id="discountPercentage" class="discountPercentage">${product.discountPercentage} %</td>
          <td id="price" class="price">${product.price}€</td>
          <td id="rating" class="rating">${product.rating}</td>
          <td id="stock" class="stock">${product.stock}</td>
          </tr>
          </tbody>
      </table>`;

    cardContent.appendChild(title);
    cardContent.appendChild(brand);
    cardContent.appendChild(category);
    cardContent.appendChild(description);
    card.appendChild(cardContent)
    cardImageAndTable.appendChild(images);
    cardImageAndTable.appendChild(table);
    card.appendChild(cardImageAndTable)

    content.appendChild(card);
  });
};
fetching(request);

