document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation buttons
    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach((button) => {
        button.addEventListener("click", function () {
            if (this.textContent === "Resume") {
                // Open resume in a new tab (Replace 'resume.pdf' with your actual resume URL)
                window.open("./public/resume.pdf", "_blank");
            }
        });
    });

    navButtons.forEach((button) => {
        button.addEventListener("click", function () {
            if (this.textContent === "Work") {
                window.open("https://github.com/kavi3006", "_blank");
            }
        });
    });
});
