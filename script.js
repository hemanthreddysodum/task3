document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const sections = document.querySelectorAll("main section");

    // Interactive Menu
    menu.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            e.preventDefault();
            const targetSection = document.querySelector(e.target.getAttribute("href"));
            sections.forEach(section => section.style.display = "none");
            targetSection.style.display = "block";
        }
    });

    // Initially show only home section
    sections.forEach(section => section.style.display = "none");
    document.getElementById("home").style.display = "block";

    // Form Validation and Dynamic Content Update
    const form = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            formResponse.innerHTML = `<p>Thank you, ${name}! We have received your message.</p>`;
            form.reset();
        } else {
            formResponse.innerHTML = "<p>Please fill out all fields.</p>";
        }
    });
});
