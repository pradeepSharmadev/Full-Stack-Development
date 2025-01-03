window.addEventListener("DOMContentLoaded", () => {
  // select elements of DOM
  const itemsContainer = document.getElementById("items-container");
  const selectedItems = document.getElementById("main");
  const totalAmount = document.getElementById("totalAmount");
  const checkOut = document.getElementById("checkOut");

  //   Total Price
  let totalPrice = 0.0;
  // Array of objects selected in card
  let cartItemsList = JSON.parse(localStorage.getItem("cartItems")) || [];
  displaySelectedItems();
  // Object of Products
  let itemsList = [
    {
      id: 1,
      name: "Lipstick",
      price: 10.99,
      quantity: 1,
      imageLink:
        "https://cdn.prod.website-files.com/622488277ab5ee818d179d9f/66d22b7ac64f6eb1a8e6c52a_66663a45ee5a28ca08601aae_AD_4nXdJKhLEPP4CNsvHyeplFhtUKuCyIRP-DgRyN4XZDOdeTY3U1Wm63Sw6_lEXUSosjKz0d7Be-aOd7vxV0vCD7yJfCX84cj757AurBlkO4PzAkPvwpMXYphYPR0e3X06N11x5xiX0W0iFToEgJnDiljitVnU.webp",
      description:
        "Lipstick contains pigments and waxes for color and texture, and also best market",
    },
    {
      id: 2,
      name: "Shoes",
      price: 49.9,
      quantity: 1,
      imageLink:
        "https://backend.orbitvu.com/sites/default/files/image/sport-shoe-white-background.jpeg",
      description:
        "Step into style and comfort! Our lightweight, durable shoes are perfect for any occasion",
    },
    {
      id: 3,
      name: "Headphones",
      price: 49.9,
      quantity: 1,
      imageLink:
        "https://cdn-bjpdk.nitrocdn.com/dyjDRTumiVVFLKEpXMADzKdEUUbypNrL/assets/images/optimized/rev-0418da3/www.visualeducation.com/wp-content/uploads/2020/05/Beats_headphones-2-1558px.jpg",
      description:
        "Experience crystal-clear sound and powerful bass with our sleek, noise-canceling headphones.",
    },
  ];

  // Product display on front-end dynamically
  itemsList.forEach((item) => {
    const parentOfItem = document.createElement("div");
    parentOfItem.setAttribute("class", "item");
    parentOfItem.setAttribute("id", "item");
    parentOfItem.innerHTML = `
        <img
              src=${item.imageLink}
            />
            <h3>${item.name}</h3>
            <h4>${item.description}</h4>
            <p>Price: $<span>${item.price}</span></p>
            <button data-id = ${item.id}>Add Item</button>
        `;
    itemsContainer.appendChild(parentOfItem);
  });

  //Add to product to cart
  // Product is one selected twice or more display number of items
  itemsContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = parseInt(e.target.dataset.id);
      if (cartItemsList.some((item) => item.id === id)) {
        cartItemsList.find((item) => item.id === id).quantity++;
      } else {
        arrayObject = itemsList.find((item) => item.id === id);
        cartItemsList.push(arrayObject);
      }
      totalPriceCalculate();
      displaySelectedItems();
      saveToLocalStorage();
    }
  });

  // Display selected Array objects of products
  function displaySelectedItems() {
    // previous selected items must be maintained to 0 so that newly added item will be displayed
    selectedItems.innerHTML = "";
    cartItemsList.forEach((item) => {
      let parentNode = document.createElement("div");
      parentNode.classList.add("itemTitle");
      parentNode.innerHTML = `
                  ${item.name} - Quantity <span> ${item.quantity}*</span><span>${item.price}</span>
                  <button data-id=${item.id}  class="remove">Remove</button>
            `;

      selectedItems.appendChild(parentNode);
    });
  }
  // Total price of selected items
  function totalPriceCalculate() {
    totalPrice = 0.0;
    cartItemsList.forEach((item) => {
      totalPrice = totalPrice + item.quantity * item.price;
    });
    totalAmount.innerHTML = totalPrice;
  }
  // Remove btn to remove item from selected cart also maintain total price
  selectedItems.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = parseInt(e.target.getAttribute("data-id"));
      if (cartItemsList.some((item) => item.id === id && item.quantity > 1)) {
        cartItemsList.find((item) => item.id === id).quantity--;
      } else {
        cartItemsList = cartItemsList.filter((item) => item.id !== id);
      }
      totalPriceCalculate();
      displaySelectedItems();
      saveToLocalStorage();
    }
  });

  // save the selected item to localStorage
  function saveToLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(cartItemsList));
  }
  //   Order-Now or Check-Out btn
  checkOut.addEventListener("click", () => {
    if (cartItemsList.length === 0) {
      alert("Your Cart is Empty");
      return;
    } else {
      cartItemsList = [];
      totalPrice = 0.0;
      alert("Check-Out Successfully! Your Order Deliver Soon.");
      totalPriceCalculate();
      displaySelectedItems();
    }
  });
});
