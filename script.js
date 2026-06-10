
// ============================
// 🔥 ENTER STORE
// ============================
function enterStore() {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("shop-screen").style.display = "block";
}

// ============================
// 🛍️ PRODUCTS (6 EACH CATEGORY)
// ============================
const products = [

  // T-SHIRTS
  { name: "Nike T-Shirt", price: 999, oldPrice: 1499, category: "T-Shirts", image: "images/tshirt1.jpg" },
  { name: "Adidas T-Shirt", price: 899, oldPrice: 1299, category: "T-Shirts", image: "images/tshirt2.jpg" },
  { name: "Puma T-Shirt", price: 799, oldPrice: 1199, category: "T-Shirts", image: "images/tshirt3.jpg" },
  { name: "Reebok T-Shirt", price: 850, oldPrice: 1200, category: "T-Shirts", image: "images/tshirt4.jpg" },
  { name: "Roadster T-Shirt", price: 699, oldPrice: 999, category: "T-Shirts", image: "images/tshirt5.jpg" },
  { name: "HRX T-Shirt", price: 799, oldPrice: 1100, category: "T-Shirts", image: "images/tshirt6.jpg" },

  // SHIRTS
  { name: "Levi's Shirt", price: 1999, oldPrice: 2499, category: "Shirts", image: "images/shirt1.jpg" },
  { name: "Allen Solly Shirt", price: 1799, oldPrice: 2299, category: "Shirts", image: "images/shirt2.jpg" },
  { name: "Peter England Shirt", price: 1499, oldPrice: 1999, category: "Shirts", image: "images/shirt3.jpg" },
  { name: "Van Heusen Shirt", price: 1899, oldPrice: 2399, category: "Shirts", image: "images/shirt4.jpg" },
  { name: "Formal White Shirt", price: 1299, oldPrice: 1699, category: "Shirts", image: "images/shirt5.jpg" },
  { name: "Denim Shirt", price: 1599, oldPrice: 1999, category: "Shirts", image: "images/shirt6.jpg" },

  // PANTS
  { name: "Levi's Jeans", price: 2999, oldPrice: 3499, category: "Pants", image: "images/pant1.jpg" },
  { name: "Wrangler Jeans", price: 2799, oldPrice: 3299, category: "Pants", image: "images/pant2.jpg" },
  { name: "Nike Track Pants", price: 1999, oldPrice: 2499, category: "Pants", image: "images/pant3.jpg" },
  { name: "Formal Pants", price: 1599, oldPrice: 2099, category: "Pants", image: "images/pant4.jpg" },
  { name: "Jogger Pants", price: 1399, oldPrice: 1899, category: "Pants", image: "images/pant5.jpg" },
  { name: "Cargo Pants", price: 1899, oldPrice: 2399, category: "Pants", image: "images/pant6.jpg" },

  // SHOES
  { name: "Nike Shoes", price: 4999, oldPrice: 5999, category: "Shoes", image: "images/shoe1.jpg" },
  { name: "Adidas Sneakers", price: 4599, oldPrice: 5299, category: "Shoes", image: "images/shoe2.jpg" },
  { name: "Puma Shoes", price: 3499, oldPrice: 3999, category: "Shoes", image: "images/shoe3.jpg" },
  { name: "Campus Shoes", price: 1999, oldPrice: 2499, category: "Shoes", image: "images/shoe4.jpg" },
  { name: "Bata Shoes", price: 1499, oldPrice: 1999, category: "Shoes", image: "images/shoe5.jpg" },
  { name: "Reebok Shoes", price: 2999, oldPrice: 3499, category: "Shoes", image: "images/shoe6.jpg" },

  // ELECTRONICS
  { name: "HP Laptop", price: 55000, oldPrice: 60000, category: "Electronics", image: "images/elec1.jpg" },
  { name: "Dell Laptop", price: 60000, oldPrice: 65000, category: "Electronics", image: "images/elec2.jpg" },
  { name: "iPhone 14", price: 70000, oldPrice: 75000, category: "Electronics", image: "images/elec3.jpg" },
  { name: "Samsung Phone", price: 45000, oldPrice: 50000, category: "Electronics", image: "images/elec4.jpg" },
  { name: "Boat Earbuds", price: 1499, oldPrice: 2499, category: "Electronics", image: "images/elec5.jpg" },
  { name: "Sony Headphones", price: 2999, oldPrice: 3999, category: "Electronics", image: "images/elec6.jpg" },

  // APPLIANCES
  { name: "LG Refrigerator", price: 30000, oldPrice: 35000, category: "Appliances", image: "images/app1.jpg" },
  { name: "Samsung Fridge", price: 28000, oldPrice: 32000, category: "Appliances", image: "images/app2.jpg" },
  { name: "Washing Machine", price: 20000, oldPrice: 25000, category: "Appliances", image: "images/app3.jpg" },
  { name: "Microwave Oven", price: 10000, oldPrice: 12000, category: "Appliances", image: "images/app4.jpg" },
  { name: "Mixer Grinder", price: 2500, oldPrice: 3500, category: "Appliances", image: "images/app5.jpg" },
  { name: "Air Conditioner", price: 35000, oldPrice: 40000, category: "Appliances", image: "images/app6.jpg" }

];

// ============================
// 🛒 CART
// ============================
let cart = [];

// ============================
// 📦 DISPLAY PRODUCTS
// ============================
function displayProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  const categories = [...new Set(list.map(p => p.category))];

  categories.forEach(category => {
    const section = document.createElement("div");
    section.innerHTML = `<h2>${category}</h2>`;

    const row = document.createElement("div");
    row.className = "row";

    list.filter(p => p.category === category).forEach(product => {

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p><del>&#8377;${product.oldPrice}</del> &#8377;${product.price}</p>
        <p>⭐⭐⭐⭐☆</p>
        <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
      `;

      row.appendChild(card);
    });

    section.appendChild(row);
    container.appendChild(section);
  });
}

// ============================
// ➕ ADD TO CART
// ============================
function addToCart(product) {
  cart.push(product);
  document.getElementById("count").innerText = cart.length;
}

// ============================
// 🔍 SEARCH
// ============================
function searchProducts() {
  const input = document.getElementById("search").value.toLowerCase();
  displayProducts(products.filter(p => p.name.toLowerCase().includes(input)));
}

// ============================
// 🎯 FILTER
// ============================
function filterCategory(cat) {
  displayProducts(products.filter(p => p.category === cat));
}

// ============================
// 🛒 SHOW ORDERS
// ============================
function showOrders() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  container.innerHTML = `
    <div class="orders-header">
      <h2>🛒 My Orders</h2>
      <p>You have ${cart.length} item(s)</p>
    </div>
  `;

  if (cart.length === 0) {
    container.innerHTML += `<p class="empty">Your cart is empty 😔</p>`;
    return;
  }

  let total = 0;

  const list = document.createElement("div");
  list.className = "order-list";

  cart.forEach(item => {
    total += item.price;

    const row = document.createElement("div");
    row.className = "order-card";

    row.innerHTML = `
      <img src="${item.image}">
      <div>
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
      </div>
    `;

    list.appendChild(row);
  });

  container.appendChild(list);

  const summary = document.createElement("div");
  summary.className = "order-summary";

  summary.innerHTML = `
    <h3>Order Summary</h3>
    <p>Total Items: ${cart.length}</p>
    <p><b>Total: ₹${total}</b></p>
    <button onclick="checkout()">Checkout</button>
  `;

  container.appendChild(summary);
}

// ============================
// 💳 CHECKOUT
// ============================
function checkout() {
  alert("🎉 Order Placed Successfully!");
  cart = [];
  document.getElementById("count").innerText = 0;
  displayProducts(products);
}

// ============================
// 🚀 INIT
// ============================
displayProducts(products);