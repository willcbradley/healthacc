const toggles = document.querySelectorAll('.toggle');
const content = document.querySelectorAll('.content');
const pageName = window.location.pathname.slice(1)

const fundamentals = [
    "i",
    "m",
    "n",
    "b",
    "d",
    "c",
    "p",
    "s",
    "f",
    "a",
    "r",
    "y"
]

// check if on homepage
if (toggles && content)  {
    window.addEventListener("DOMContentLoaded", (event) => {
        toggles.forEach(t => t.classList.remove('active'));
        content.forEach(c => c.classList.add('hidden'));
        if (window.location.hash === "#p") {
            toggles[1].classList.add('active')
            content[1].classList.remove('hidden') 
        } else {
            toggles[0].classList.add('active')
            content[0].classList.remove('hidden')
    }})

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

    toggles.forEach(toggle => {
        toggle.addEventListener('click', e => {
            const index = e.currentTarget.dataset.target

            toggles.forEach(t => t.classList.remove('active'));
            content.forEach(c => c.classList.add('hidden'));

            e.currentTarget.classList.add('active')
            content[index].classList.remove('hidden')

            window.scrollTo(0,0);
        })
    })
}

// check if on fundamentals page
if (fundamentals.includes(pageName)) {
    window.addEventListener("keydown", e => {
        const essayIndex = fundamentals.indexOf(pageName)

        if (e.key === "ArrowRight" && essayIndex < fundamentals.length - 1) {
            window.location.href = fundamentals[essayIndex + 1]
            console.log("moving to the right")
        }

        if (e.key === "ArrowLeft" && essayIndex > 0) {
            window.location.href = fundamentals[essayIndex - 1]
        }
    })
}

// else
document.addEventListener('click', function (e) {
    const vistoggle = e.target.closest('[data-toggle]');
    if (!vistoggle) return;

    e.preventDefault();

    const group = vistoggle.closest('.toggle-group');
    if (group) {
        group.classList.toggle('active');
    }
});