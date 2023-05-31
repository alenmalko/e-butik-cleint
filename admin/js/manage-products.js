fetch("http://localhost:3000/api/products/")
  .then((response) => response.json())
  .then((data) => {
    const productTable = document.getElementById("product-table");
    const tbody = productTable.querySelector("tbody");

    data.forEach((product) => {
      const row = document.createElement("tr");

      const integrateTableData = document.createElement("td");

      const linkToUpdateProduct = document.createElement("a");
      linkToUpdateProduct.setAttribute("href", "update-product.html");
      linkToUpdateProduct.textContent = "Redigera";

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Radera";
      deleteButton.addEventListener("click", function () {
        deleteProduct(product._id);
        window.location.href = "manage-products.html";
      });

      row.innerHTML =`
            <td>${product.title}</td>
            <td>${product.price} kr</td>
            <td>${product.stock}</td>
            <td>${product.date}</td>
           
            `; 

      integrateTableData.appendChild(linkToUpdateProduct);
      integrateTableData.appendChild(deleteButton);
      row.appendChild(integrateTableData);
      tbody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Ett fel uppstod vid hämtning av produkter:", error);
  });

function deleteProduct(productId) {
  console.log("PRODUCTID", productId);
  const url = `http://localhost:3000/api/products/${productId}`;

  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Delete response:", result);
      // Do something with the delete response
    })
    .catch((error) => {
      console.error("An error occurred during delete:", error);
    });
}