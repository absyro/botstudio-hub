// Find all images inside the page.
document.querySelectorAll('img').forEach((img) => {
    // Add a new click handler to the image.
    img.addEventListener('click', () => {
        // Whenever the user clicks on the image, toggle the 'zoomed' class.
        img.classList.toggle('zoomed');

        // If the image has been zoomed, add the background overlay; otherwise, remove the background overlay from the page.
        img.classList.contains('zoomed') ? document.body.appendChild(Object.assign(document.createElement('div'), { id: 'background-overlay' })) : document.getElementById('background-overlay').remove();
    });
});
