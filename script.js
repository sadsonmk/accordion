const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.target.classList.toggle('active');
        const panel = e.target.nextElementSibling;

        const hgt = panel.style.maxHeight;
        if (!hgt) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        } else {
            panel.style.maxHeight = null;
        }
    })
})