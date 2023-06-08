const checkbox = document.getElementById('themeCheckbox');
const body = document.body;

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});