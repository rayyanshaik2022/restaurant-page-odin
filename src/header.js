function createHeader() {
    const header = document.createElement("header");

    header.innerHTML = `
        <h1>Rayyan's Ribs</h1>
        <ul class="header-container">
                <li id="home" class="tab">Home</li>
                <li id="menu" class="tab">Menu</li>
                <li id="contact" class="tab">Contact</li>
        </ul>
    `;

    return header;
}

export default createHeader;
