document.querySelectorAll('.navbar ul li').forEach(item => {
    item.addEventListener('click', () => {
        const page = item.textContent.toLowerCase();
        window.location.href = `${page}.html`; // Replace with your actual file paths if needed
    });
});
