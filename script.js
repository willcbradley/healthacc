const toggles = document.querySelectorAll('.toggle');
const content  = document.querySelectorAll('.content');

toggles.forEach(toggle => {
    toggle.addEventListener('click', e => {
        const index = e.currentTarget.dataset.target

        toggles.forEach(t => t.classList.remove('active'));
        content.forEach(c => c.classList.add('hidden'));

        e.currentTarget.classList.add('active')
        content[index].classList.remove('hidden')
    })
})