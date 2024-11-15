document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.getElementById('tooltip');
    const stores = document.querySelectorAll('.store');
    const clickSound = document.getElementById('click-sound');

    stores.forEach(store => {
        store.addEventListener('mouseenter', function(event) {
            const info = event.target.getAttribute('data-info');
            tooltip.textContent = info;
            tooltip.style.display = 'block';

            // Calculate tooltip position
            const rect = event.target.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.bottom + window.scrollY}px`;
        });

        store.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });

        store.addEventListener('click', function() {
            clickSound.currentTime = 0; // Reinicia el sonido al principio
            clickSound.play();  // Reproduce el sonido
        });
    });
});
