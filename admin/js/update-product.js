window.onload = getProductById;
function getProductById() {
  const productIdFromLocalStorage = localStorage.getItem("productId");
  fetch ( `http://localhost:3000/api/products/${productIdFromLocalStorage} `)
    .then((response) => response.json())
    .then((product) => {
      document.getElementById("title").value = product.title;
      document.getElementById("description").value = product.description;
      document.getElementById("price").value = product.price;
      document.getElementById("stock").value = product.stock;
    })
    .catch((error) => {
      console.error("Could not fetch products:", error);
    });
}

function updateProduct() {
  const productIdFromLocalStorage = localStorage.getItem("productId");
  const url  =  `http://localhost:3000/api/products/${productIdFromLocalStorage  } `
  const updatedTitle = document.getElementById("title").value;
  const updatedDescription = document.getElementById("description").value;
  const updatedPrice = document.getElementById("price").value;
  const updatedStock = document.getElementById("stock").value;
  const updatedDate = new Date(Date.now());

  //Skapa ett objekt med produktdata
  const updatedProduct = {
    title: updatedTitle,
    description: updatedDescription,
    price: updatedPrice,
    stock: updatedStock,
    date: updatedDate,
  };
  console.log(updatedProduct);

  fetch( url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  } )
    .then((response) => response.json())
    .then((result) => {
      console.log("Updated product response:", result);
      window.location.href = "manage-products.html";
    })
    .catch((error) => {
      console.error("An error occurred during delete:", error);
    });
}