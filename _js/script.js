const sidebarItems = document.querySelectorAll('.sidebar-item');

function selectItem() {
    removeSelected();

    this.classList.add('selected');
}

function removeSelected() {
    sidebarItems.forEach(item => {
        item.classList.remove('selected');
    })
}

sidebarItems.forEach(item => {
    item.addEventListener('click', selectItem);
})