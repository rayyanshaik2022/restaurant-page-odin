function createMenu() {
    const menu = document.createElement("menu");

    menu.innerHTML = `
        <div class="menu-container main-container">
            <h1 class="menu-title">MENU</h1>
            <ul class="menu-section">
                <li>Ribs</li>
                <li>Spicy Ribs</li>
                <li>Salty Ribs</li>
                <li>Large ribs</li>
            </ul>
            <ul class="menu-section">
                <li>Sides</li>
                <li>Corn</li>
                <li>Potatoes</li>
            </ul>
            <ul class="menu-section">
                <li>Deserts</li>
                <li>Sweet Ribs</li>
                <li>Vanilla Ice Cream</li>
                <li>Churros</li>
            </ul>
        </div>
    `;

    menu.classList.add("main-container");
    return menu;
}

export default createMenu;
