const toggles = document.querySelectorAll('.toggle');
const content = document.querySelectorAll('.content');
const pageName = window.location.pathname.slice(1);
const archiveList = document.getElementById("archive");
const fundamentalsList = document.getElementById("fundamentals");

const fundamentals = []

for (i = 0; i <= 15; i++) {
    fundamentals.push(`${i}`)
}

const archive = []

for (i = 0; i <= 5; i++) {
    archive.push(`a${i}`)
}

// check if on homepage
if (toggles && content)  {
    window.addEventListener("DOMContentLoaded", (event) => {
        toggles.forEach(t => t.classList.remove('active'));
        content.forEach(c => c.classList.add('hidden'));
        if (window.location.hash === "#p") {
            toggles[1].classList.add('active')
            content[1].classList.remove('hidden') 
        } else if (window.location.hash === "#a") {
            toggles[1].classList.add('active')
            content[1].classList.remove('hidden') 
            archiveList.classList.add('active')
        } else if (window.location.hash === "#f") {
            toggles[1].classList.add('active')
            content[1].classList.remove('hidden') 
            fundamentalsList.classList.add('active')
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
        
            window.scrollTo(0,0);
        }

        if (e.key == 'ArrowLeft' && content[0].classList.contains('hidden')) {
            toggles.forEach(t => t.classList.remove('active'));
            content.forEach(c => c.classList.add('hidden'));

            toggles[0].classList.add('active')
            content[0].classList.remove('hidden') 

            window.scrollTo(0,0);
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
        }

        if (e.key === "ArrowLeft" && essayIndex > 0) {
            window.location.href = fundamentals[essayIndex - 1]
        }
    })
}

// check if on archive page
if (archive.includes(pageName)) {
    window.addEventListener("keydown", e => {

        const essayIndex = archive.indexOf(pageName)

        if (e.key === "ArrowRight" && essayIndex < archive.length - 1) {
            window.location.href = archive[essayIndex + 1]
        }

        if (e.key === "ArrowLeft" && essayIndex > 0) {
            window.location.href = archive[essayIndex - 1]
        }
    })
}

// everywhere
document.addEventListener('click', function (e) {
    const vistoggle = e.target.closest('[data-toggle]');
    if (!vistoggle) return;

    e.preventDefault();

    const group = vistoggle.closest('.toggle-group');
    if (group) {
        group.classList.toggle('active');
    }
});