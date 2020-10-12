const sideBarItems = document.querySelectorAll(".sidebar-item");

function selectItemClick() {
  removeSelected();

  this.classList.add("selected");
}

function removeSelected() {
  sideBarItems.forEach((item) => {
    item.classList.remove("selected");
  });
}

sideBarItems.forEach((item) => {
  item.addEventListener("click", selectItemClick);
});

const callToAction = document.querySelectorAll(".call-to-action");

function redirectLink(event) {
    window.open(
        'https://www.figma.com/proto/hxAkCN9CS5BwEHR8oBh3b6/Projeto-EasyPark-%2F-Wbrain?node-id=50%3A0&scaling=min-zoom',
        '_blank'
      );
}

callToAction.forEach((item) => {
  item.addEventListener("click", redirectLink);
});
