const sideBarItems = document.querySelectorAll(".sidebar-item");
const mainSections = document.querySelectorAll(".content");
const callToAction = document.querySelectorAll(".call-to-action");

const main = document.querySelector('#main');

let lastId;
let cur = [];

function selectItemClick() {
  removeSelected();

  this.classList.add("selected");
}

function removeSelected() {
  sideBarItems.forEach((item) => {
    item.classList.remove("selected");
  });
}

function redirectLink(event) {
  window.open(
      'https://www.figma.com/proto/hxAkCN9CS5BwEHR8oBh3b6/Projeto-EasyPark-%2F-Wbrain?node-id=50%3A0&scaling=min-zoom',
      '_blank'
    );
}

function scrollEvent(event) {
  var fromTop = $('#main').scrollTop();

  sideBarItems.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop+1
    ) {
      link.classList.add("selected");
    } else {
      link.classList.remove("selected");
    }
  });
}

sideBarItems.forEach((item) => {
  item.addEventListener("click", selectItemClick);
});

callToAction.forEach((item) => {
  item.addEventListener("click", redirectLink);
});

main.addEventListener("scroll", scrollEvent);