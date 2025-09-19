document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const openBtn = document.getElementById("openPopup");
  const closeBtn = document.getElementById("closePopup");
  const inputs = document.querySelectorAll(".popup__form__text");
  const saveButton = document.getElementById("saveButton");

  if (openBtn && closeBtn && popup) {
    openBtn.addEventListener("click", () =>
      popup.classList.add("popup_opened")
    );
    closeBtn.addEventListener("click", () =>
      popup.classList.remove("popup_opened")
    );
  }

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      let hasText = false;
      inputs.forEach((i) => {
        if (i.value.trim() !== "") hasText = true;
      });

      if (hasText) {
        saveButton.classList.add("active");
      } else {
        saveButton.classList.remove("active");
      }
    });
  });

  const buttons = document.querySelectorAll(".elements__foot-button");

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const img = button.querySelector("img");

    button.addEventListener("click", () => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        img.src = "./images/heart.svg";
      } else {
        button.classList.add("active");
        img.src = "./images/hearthfilled.png";
      }
    });
  }

  let formElement = document.querySelector("#editForm");

  function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    let nameInput = document.querySelector('input[name="name"]');
    let jobInput = document.querySelector('input[name="about"]');

    let newName = nameInput.value;
    let newAbout = jobInput.value;

    let nameDisplay = document.querySelector(".cover__container__info-name");
    let aboutDisplay = document.querySelector(".cover__container__info-role");

    if (newName) nameDisplay.textContent = newName;
    if (newAbout) aboutDisplay.textContent = newAbout;

    document.getElementById("popup").classList.remove("popup_opened");
  }

  formElement.addEventListener("submit", handleProfileFormSubmit);
});
