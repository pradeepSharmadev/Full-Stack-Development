window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const inputCategory = document.getElementById("category");
  const inputAmount = document.getElementById("expenseAmount");
  const addExpense = document.getElementById("btn");
  const container = document.getElementById("container");
  const totalAmount = document.getElementById("totalAmount");

  let expenseList = JSON.parse(localStorage.getItem("expense")) || [];
  let totalExpenseAmount = 0.0;
  reRenderExpenseList();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let category = inputCategory.value.trim();
    let expenseAmount = inputAmount.value.trim();
    expenseAmount = parseInt(expenseAmount);
    if (category && expenseAmount && expenseAmount > 0) {
      const expense = {
        id: Date.now(),
        title: category,
        expenseAmount: expenseAmount,
      };
      expenseList.push(expense);
    }
    reRenderExpenseList();
    totalExpenseAmountCalculate();
    saveExpenseTOLocalStorage();
    category = "";
    expenseAmount = "";
  });
  function reRenderExpenseList() {
    container.innerHTML = "";
    expenseList.forEach((expense) => {
      const parent = document.createElement("div");
      parent.classList.add("parent");
      parent.setAttribute("id", "parent");
      parent.innerHTML = `
      <div class="title">${expense.title} - $<span id="amount">${expense.expenseAmount}</span>
        </div><button id=${expense.id}>Remove</button>
        `;
      container.appendChild(parent);

      totalExpenseAmountCalculate();
    });
  }
  function saveExpenseTOLocalStorage() {
    localStorage.setItem("expense", JSON.stringify(expenseList));
  }

  function totalExpenseAmountCalculate() {
    totalExpenseAmount = expenseList.reduce(
      (sum, current) => sum + current.expenseAmount,
      0
    );
    totalAmount.innerHTML = totalExpenseAmount;
  }

  container.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("id"));
      expenseList = expenseList.filter((expense) => expense.id !== expenseId);
      reRenderExpenseList();
      totalExpenseAmountCalculate();
      saveExpenseTOLocalStorage();
    }
  });
  totalExpenseAmountCalculate();
});
