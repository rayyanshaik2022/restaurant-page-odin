function createContact() {
    const contact = document.createElement("contact");

    contact.innerHTML = `
        <div class="contact-container">
            <h1>Built by Rayyan Shaik</h1>
        </div>
    `;

    contact.classList.add("main-container");
    return contact;
}

export default createContact;
