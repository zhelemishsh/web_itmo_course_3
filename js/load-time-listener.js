(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const loadTime = document.getElementById('load-time');
        loadTime.innerHTML += Math.round(parseFloat(performance.now())) / 1000;
    });
})();