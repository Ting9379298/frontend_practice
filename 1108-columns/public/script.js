// Function to load images from the server
async function loadImages() {
    const response = await fetch('/images');
    const imageFiles = await response.json();

    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear existing images

    // Add each image to the gallery
    imageFiles.forEach(imageFile => {
        const img = document.createElement('img');
        img.src = `images/${imageFile}`;
        img.alt = imageFile;
        img.loading = "lazy";
        gallery.appendChild(img);
    });
}

// Load images initially
loadImages();

// Optionally, reload images every few seconds to check for new images
setInterval(loadImages, 5000);