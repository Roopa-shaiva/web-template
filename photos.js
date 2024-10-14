const gallery = document.getElementById('gallery');
const loading = document.getElementById('loading');
let offset = 0;
const limit = 100;
const totalPhotos = 5000;

const loadPhotos = async () => {
    loading.style.display = 'block';
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${offset}&_limit=${limit}`);
    const photos = await response.json();
    
    photos.forEach(photo => {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo';
        photoDiv.innerHTML = `<img src="${photo.thumbnailUrl}" alt="${photo.title}"><p>${photo.title}</p>`;
        gallery.appendChild(photoDiv);
    });

    offset += limit;
    loading.style.display = 'none';
};

const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && offset < totalPhotos) {
        loadPhotos();
    }
};

window.addEventListener('scroll', handleScroll);
loadPhotos(); // Initial load
