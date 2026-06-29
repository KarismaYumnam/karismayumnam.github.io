document.addEventListener("DOMContentLoaded", () => {
    const repoName = ""; 
    const isGitHubPages = window.location.hostname.includes("github.io");

    const basePath = isGitHubPages ? `/${repoName}` : "";

    fetch(`${basePath}/_includes/navbar.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Navbar not found");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Navbar loading error:", error));
});