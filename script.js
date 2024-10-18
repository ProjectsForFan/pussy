document.addEventListener("DOMContentLoaded", function () {
    let loadingBar = document.getElementById("loadingBar");
    let catImage = document.getElementById("catImage");
    let catContainer = document.getElementById("catContainer");

    // Simulate loading progress
    function startLoading() {
        let progress = 0;
        loadingBar.style.width = "0%";
        let interval = setInterval(function () {
            if (progress < 100) {
                progress += 10;
                loadingBar.style.width = progress + "%";
            }
        }, 300);

        return interval;
    }

    // Image loaded callback
    window.imageLoaded = function () {
        clearInterval(loadingInterval);
        loadingBar.style.width = "100%";
        setTimeout(function () {
            catContainer.style.display = "flex"; // Show the image
            document.querySelector(".loading-bar-container").style.display = "none"; // Hide the loading bar
        }, 500);
    };

    // Load a new cat image
    window.getNewCat = function () {
        catContainer.style.display = "none"; // Hide the image
        document.querySelector(".loading-bar-container").style.display = "flex"; // Show the loading bar
        loadingInterval = startLoading(); // Start loading bar

        // Set a new random cat image
        catImage.src = `https://cataas.com/cat?random=${new Date().getTime()}`; // Add timestamp to avoid caching
    };

    let loadingInterval = startLoading(); // Initial load
});
