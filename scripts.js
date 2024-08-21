const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonCalculateDiscount = document.querySelector(".calculate-discount");
const buttonCalculateFinalValue = document.querySelector(".calculate-total-value");
const buttonVegansOnly = document.querySelector(".vegans-only");

let finalValueWithDiscount = "";

function formatCurrency(value) {
  const CurrencyValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return CurrencyValue;
}

function showAll(productArray) {
  let productLi = "";

  productArray.forEach((product) => {
    productLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price"> ${formatCurrency(product.price)}</p>
            </li>
        `;
  });
  list.innerHTML = productLi;
}

function calculateAll() {
  const NewPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));
  showAll(NewPrices);
}

function sumAllHamburguers() {
  const totalValue = menuOptions.reduce((acc, actual) => acc + actual.price, 0);

  list.innerHTML = `
            <li>
                <p> O valor total dos Hamburguers é de: R$ ${formatCurrency(totalValue)}</p>
            </li>
  `;
}

function vegansHamburguersOnly() {
  const vegansOnly = menuOptions.filter((product) => product.vegan);
  showAll(vegansOnly);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonCalculateDiscount.addEventListener("click", calculateAll);
buttonCalculateFinalValue.addEventListener("click", sumAllHamburguers);
buttonVegansOnly.addEventListener("click", vegansHamburguersOnly);
