const tabs = document.querySelectorAll(".tab");

function showActiveButton() {
  tabs.forEach((tab) => {
    if (tab.classList.contains("active") === true) {
      tab.setAttribute("aria-selected", true);
    } else {
      tab.setAttribute("aria-selected", false);
    }
  });
}

function handleClick(event) {
  const index = event.target.id;
  const images = document.querySelectorAll(".image");
  const articles = document.querySelectorAll("article");

  document
    .querySelectorAll(".active")
    .forEach((element) => element.classList.remove("active"));
  event.target.classList.add("active");

  images[index].classList.add("active");

  articles[index].classList.add("active");

  showActiveButton();
}

function handleKeyDown(event) {
  let index = event.target.id;
  const tabs = document.querySelectorAll(".tab");

  if (event.keyCode === 39 || event.keyCode === 40) {
    if (index < tabs.length - 1) {
      index++;
    } else {
      index = 0;
    }
    tabs[index].focus();
  }

  if (event.keyCode === 37 || event.keyCode === 38) {
    if (index > 0) {
      index--;
    } else {
      index = tabs.length - 1;
    }
    tabs[index].focus();
  }

  if (event.keyCode === 32 || event.keyCode === 13) {
    handleClick();
  }
}

export { showActiveButton, handleClick, handleKeyDown };
