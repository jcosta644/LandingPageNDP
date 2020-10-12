const sideBarItems = document.querySelectorAll('.sidebar-item');

function selectItemClick() {
    removeSelected();

    this.classList.add('selected');
}

function removeSelected() {
    sideBarItems.forEach(item => {
        item.classList.remove('selected');
    })
}


sideBarItems.forEach(item => {
    item.addEventListener('click', selectItemClick);
})