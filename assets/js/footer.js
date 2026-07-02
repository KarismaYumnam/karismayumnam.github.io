document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");

    if (footer) {
        fetch("/includes/footer.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load footer.");
                }
                return response.text();
            })
            .then(html => {
                footer.innerHTML = html;
            })
            .catch(error => console.error(error));
    }
});