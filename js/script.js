const form = document.querySelector(".modal-write");
const formBtn = document.querySelector(".form-btn");

const map = document.querySelector(".modal-map");
const mapBtn = document.querySelector(".map-btn");

const cart = document.querySelector(".modal-cart");
const cartBtn = document.querySelector(".add-cart");

if (form) {
  const formCloseBtn = form.querySelector(".modal-close");
  formCloseBtn.addEventListener("click", () => {
    form.classList.remove("modal-active");
  });
}

if (formBtn) {
  formBtn.addEventListener("click", () => {
    event.preventDefault();
    form.classList.add("modal-active");
  });
}

if (cart) {
  const cartCloseBtn = cart.querySelector(".modal-close");
  cartCloseBtn.addEventListener("click", () => {
    cart.classList.remove("modal-active");
  });
}

if (cartBtn) {
  cartBtn.addEventListener("click", () => {
    event.preventDefault();
    cart.classList.add("modal-active");
  });
}


if (map) {
  const mapCloseBtn = map.querySelector(".modal-close");
  mapCloseBtn.addEventListener("click", () => {
    map.classList.remove("modal-active");
  });
}

if (mapBtn) {
  mapBtn.addEventListener("click", () => {
    event.preventDefault();
    map.classList.add("modal-active");
  });
}