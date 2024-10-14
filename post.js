


document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById('posts');
            data.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');
                postDiv.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                postsContainer.appendChild(postDiv);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});
