for (let i = 1; i < 20; i++) {
  const request = "https://dummyjson.com/products/" + i;
  const content = document.getElementById("content");

  // fonction qui appel l'url de dummyjson en async avec l'url dans request
  const fetching = async (request) => {
    const response = await fetch(request);
    const product = await response.json();
    // console.log(product);
    const card = document.createElement("div");
    card.className = "card " + product.id;
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
    const images = document.createElement("div");
    images.className = "images";

    for (let i = 0; i < product.images.length; i++) {
      let imageDiv = document.createElement("div");
      let imgBalise = document.createElement("img");
      imgBalise.src = product.images[i]; //pour chaques éléments du tableau on met l'url dans le champs img.src
      imageDiv.className = "image";
      imageDiv.appendChild(imgBalise);
      images.appendChild(imageDiv); //on ajoute à la div avant de refaire une boucle
    }
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
          <tr>
            <td id="discountPercentage" class="discountPercentage">${product.discountPercentage} %</td>
            <td id="price" class="price">${product.price}€</td>
            <td id="rating" class="rating">${product.rating}</td>
            <td id="stock" class="stock">${product.stock}</td>
          </tr>
        </thead>
      </table>`;

    card.appendChild(title);
    card.appendChild(brand);
    card.appendChild(category);
    card.appendChild(description);
    card.appendChild(images);
    card.appendChild(table);

    content.appendChild(card);
  };
  fetching(request);
}
