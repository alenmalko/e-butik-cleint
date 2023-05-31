//visa alla produkter 
//api pratar med databasen och skickar tillbaks data i detta fallet produkter 
// denna använder vi för att hämta alla produkter GET http://localhost:3000/api/products/
window.onload=getAllProductsFromApi;

 function getAllProductsFromApi() {
    login();
    fetch("http://localhost:3000/api/products/")
      .then((response) => response.json())
      .then((products) => {
        const productList = document.getElementById("product-list");
        productList.innerHTML = ""; // Rensa listan innan du lägger till produkterna
  
        products.forEach((product) => {
          const listItem = document.createElement("li");
  
          const title = document.createElement("h3");
          title.textContent = product.title;
          listItem.appendChild(title);
  
          const price = document.createElement("p");
          price.textContent = "Pris: " + product.price;
          listItem.appendChild(price);
  
          productList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error("Could not fetch products:", error);
      });
  }
  function login() {
    const url = "http://localhost:3000/api/users/login";
    const data = {
      username: "alen",
      password: "alen",
    };
  
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Login response:", result);
        // Do something with the login response
      })
      .catch((error) => {
        console.error("An error occurred during login:", error);
      });
  }