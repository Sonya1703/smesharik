document.getElementById('searchField').addEventListener('focus', function(event) {
    event.target.placeholder = '';
});

document.getElementById('searchField').addEventListener('blur', function(event) {
    if (!event.target.value) {
        event.target.placeholder = 'Поиск...';
    }
});