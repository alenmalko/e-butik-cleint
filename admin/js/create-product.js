function createProduct() {
  // Hämta formulärdata
  const title = document.getElementById("title").value;

  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const stock = document.getElementById("stock").value;
  console.log(price);
  const date = new Date(Date.now());

  //Skapa ett objekt med produktdata
  const newProduct = {
    title: title,
    description: description,
    price: price,
    stock: stock,
    date: date,
  };
  console.log(newProduct);

  const url = "http://localhost:3000/api/products/createProduct";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Create product response:", result);
      // Do something with the create response
      window.location.href = "manage-products.html";
    })
    .catch((error) => {
      console.error("An error occurred during create:", error);
    });
}