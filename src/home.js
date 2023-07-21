function createHome() {
    const home = document.createElement("home");

    home.innerHTML = `
        <div class="home-container main-container">
            <div class="home-container">
                <h1>Fiery Ribs</h1>
                <h2>Try our signature ribs today</h2>
            </div>
        </div>
    `;

    home.classList.add("main-container");
    return home;
}

export default createHome;
