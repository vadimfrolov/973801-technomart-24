var popupWriteUs = document.querySelector(".popup-write-us");
var openPopupWriteUs = document.querySelector(".btn-write-us");
var closePopupWriteUs = document.querySelector(".popup-write-us-close");
var windowPopup = document.querySelector(".window-popup"); //Фон всех попапов для их закрытия
var login = document.querySelector("[name=name]");
var email = document.querySelector("[name=e-mail]");
var storage = localStorage.getItem("login");
var form = document.querySelector(".popup-write-us-form");
var popupMap = document.querySelector(".popup-map");
var openPopupMap = document.querySelector(".main-map");
var closePopupMap = document.querySelector(".popup-map-close");
var popupAddToBasket = document.querySelectorAll(".popup-add-to-basket");
var openPopupAddToBasket = document.querySelectorAll(".btn-popular-buy");
var closePopupAddToBasket = document.querySelectorAll(".popup-add-to-basket-close");
openPopupWriteUs.addEventListener ("click", function (event) {
  event.preventDefault();
  popupWriteUs.classList.add("popup-write-us-show");
  document.querySelector(".window-popup").style.display = "block";
  if (storage) {
    login.value = storage;
    email.focus();}
    else {
      login.focus();
    }
});
form.addEventListener('submit', function(event) {
  if (!login.value || !email.value) {
    event.preventDefault();
    popupWriteUs.classList.add("popup-error");
  }
  else {
    localStorage.setItem('login', login.value);
  }
});
window.addEventListener ("keydown", function (event) {
  if (event.keyCode == 27) {
    if (popupWriteUs.classList.contains("popup-write-us-show")) {
  popupWriteUs.classList.remove("popup-write-us-show");
  document.querySelector(".window-popup").style.display = "none";
};};});
windowPopup.addEventListener ("click", function () {
  popupWriteUs.classList.remove("popup-write-us-show");
  popupWriteUs.classList.remove("popup-error");
  document.querySelector(".window-popup").style.display = "none";
});
closePopupWriteUs.addEventListener ("click", function (event) {
  event.preventDefault();
  popupWriteUs.classList.remove("popup-write-us-show");
  popupWriteUs.classList.remove("popup-error");
  document.querySelector(".window-popup").style.display = "none";
});
openPopupMap.addEventListener ("click", function (event) {
  event.preventDefault();
  popupMap.classList.add("popup-map-show");
  document.querySelector(".window-popup").style.display = "block";
});
window.addEventListener ("keydown", function (event) {
  if (event.keyCode == 27) {
    if (popupMap.classList.contains("popup-map-show")) {
  popupMap.classList.remove("popup-map-show");
  document.querySelector(".window-popup").style.display = "none";
};};});
windowPopup.addEventListener ("click", function () {
  popupMap.classList.remove("popup-map-show");
  document.querySelector(".window-popup").style.display = "none";
});
closePopupMap.addEventListener ("click", function (event) {
  event.preventDefault();
  popupMap.classList.remove("popup-map-show");
  document.querySelector(".window-popup").style.display = "none";
});
openPopupAddToBasket.addEventListener ("click", function (event) {
 event.preventDefault();
 popupAddToBasket.classList.add("popup-add-to-basket-show");
 document.querySelector(".window-popup").style.display = "block";
});

window.addEventListener ("keydown", function (event) {
 if (event.keyCode == 27) {
   if (popupAddToBasket.classList.contains("popup-add-to-basket-show")) {
 popupAddToBasket.classList.remove("popup-add-to-basket-show");
 document.querySelector(".window-popup").style.display = "none";
};};});
windowPopup.addEventListener ("click", function () {
 popupAddToBasket.classList.remove("popup-add-to-basket-show");
 document.querySelector(".window-popup").style.display = "none";
});
closePopupAddToBasket.addEventListener ("click", function (event) {
 event.preventDefault();
 popupAddToBasket.classList.remove("popup-add-to-basket-show");
 document.querySelector(".window-popup").style.display = "none";
});
