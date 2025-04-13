async function fetchData() {
    const movieContainer = document.getElementById("movieContainer");

        const response = await fetch('data.json');
        const data = await response.json();

        movieContainer.innerHTML = data.map(movie => `
            <div class="movie-item">
                <img src="${movie.image}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>Phim ${movie.title}</h3>
                    <button class="watch-btn">Xem ngay</button>
                </div>
            </div>
        `).join('');
}

document.addEventListener("DOMContentLoaded", fetchData);
