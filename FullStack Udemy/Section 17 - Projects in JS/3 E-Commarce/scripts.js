window.addEventListener("DOMContentLoaded", () => {
  const itemsContainer = document.getElementById("items-container");
  const itemOnClickButton = document.getElementById("item");
  const selectedItems = document.getElementById("main");
  const totalAmount = document.getElementById("totalAmount");

  let totalPrice = 0;
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
  let allItemsSelected = [];
  let selectedItemsList =JSON.parse(localStorage.getItem("items")) || [];
  
  if (selectedItemsList.length !== 0) {
    reRenderSelectedItems();
  }
  reRenderItems();

  function reRenderItems() {
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
  }

  itemsContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let productId = parseInt(e.target.getAttribute("data-id"));

      productDetails = itemsList.filter((item) => {
        if (item.id === productId) {
          return item;
        }
      });

      // let tempSelectedItemList = selectedItemsList.filter((item) =>);

      selectedItemsList.push(productDetails[0]);
      reRenderSelectedItems();

      // const id = e.target.dataset.id;
      // const item = itemsList.find((item) => item.id === parseInt(id));
      // if (item.quantity > 0) {
      //   item.quantity--;
      //   const parentOfItem = e.target.parentNode;
      //   const price = item.price;
      //   const quantity = item.quantity;
      //   const total = price * quantity;
      //   const totalElement = document.createElement("p");
      //   totalElement.textContent = `Total: $${total}`;
      //   parentOfItem.appendChild(totalElement);
      // }
    }
  });

  function reRenderSelectedItems() {
    selectedItemsList.forEach((item) => {
      let parentNode = document.createElement("div");
      parentNode.setAttribute("class", "itemTitle");
      parentNode.innerHTML = `
              ${item.name} - Quantity <span>1 * </span><span>${item.price}</span>
              <button data-id=${item.id}  class="remove">Remove</button>
        `;
      selectedItems.appendChild(parentNode);
      allItemsSelected.push(selectedItemsList);
      selectedItemsList = [];
      saveToLocalStorage(allItemsSelected);
      totalPrice += item.price;
      totalPriceCalculate();
    });
  }
  function totalPriceCalculate() {
    totalAmount.innerText = totalPrice.toFixed(2);
  }

  function saveToLocalStorage(item) {
    const arrayItems = [];
    item.forEach((object, index) => {
      arrayItems.push(object[0]);
    });
    localStorage.setItem("items", JSON.stringify(arrayItems));
  }

  // selectedItems.addEventListener("click", (e) => {
  //   if (e.target.tagName === "BUTTON") {
  //     let itemId = parseInt(e.target.getAttribute("data-id"));
  //     expenseList = selected.filter((expense) => expense.id !== itemId);
  //     reRenderSelectedItems(expenseList)
  //   }
  //   // localStorage.setItem("items",JSON.stringify(selectedItemsList))
  // });
});
