window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

document.querySelectorAll('#navbar ul li a').forEach(function(item) {
    item.addEventListener('mouseover', function() {
        item.style.color = 'yellow';
    });
    item.addEventListener('mouseout', function() {
        item.style.color = 'white';
    });
});