const form = document.querySelector(".modal-write");
const formBtn = document.querySelector(".form-btn");

const feedBackForm = document.querySelector(".modal-write form");

const map = document.querySelector(".modal-map");
const mapBtn = document.querySelector(".map-btn");

const cart = document.querySelector(".modal-cart");
const cartBtns = document.querySelectorAll(".add-cart");

const formName = document.querySelector(".modal-window-name");
const formEmail = document.querySelector(".modal-window-mail");

if (feedBackForm) {
  feedBackForm.addEventListener("submit", function (evt) {
    if (!formName.value || !formEmail.value) {
      evt.preventDefault();
      form.classList.remove("modal-error");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("modal-error");
    }
  });
}

if (form) {
  const formCloseBtn = form.querySelector(".modal-close");
  formCloseBtn.addEventListener("click", () => {
    form.classList.remove("modal-active");
    form.classList.remove("modal-error");
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

cartBtns.forEach((button) =>
  button.addEventListener("click", () => {
    event.preventDefault();
    cart.classList.add("modal-active");
  })
);

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
