const toggles = document.querySelectorAll('.toggle');
const content  = document.querySelectorAll('.content');

window.addEventListener("DOMContentLoaded", (event) => {
    if (window.location.hash === "#p") {
        toggles.forEach(t => t.classList.remove('active'));
        content.forEach(c => c.classList.add('hidden'));

        toggles[1].classList.add('active')
        content[1].classList.remove('hidden') 
    }})


toggles.forEach(toggle => {
    toggle.addEventListener('click', e => {
        const index = e.currentTarget.dataset.target

        toggles.forEach(t => t.classList.remove('active'));
        content.forEach(c => c.classList.add('hidden'));

        e.currentTarget.classList.add('active')
        content[index].classList.remove('hidden')
    })
})

window.addEventListener('keydown', e => {
    if (e.key == 'ArrowRight' && content[1].classList.contains('hidden')) {
        toggles.forEach(t => t.classList.remove('active'));
        content.forEach(c => c.classList.add('hidden'));

        toggles[1].classList.add('active')
        content[1].classList.remove('hidden') 
    }

    if (e.key == 'ArrowLeft' && content[0].classList.contains('hidden')) {
        toggles.forEach(t => t.classList.remove('active'));
        content.forEach(c => c.classList.add('hidden'));

        toggles[0].classList.add('active')
        content[0].classList.remove('hidden') 
    }
})