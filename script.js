const toggles = document.querySelectorAll('.toggle');
const content  = document.querySelectorAll('.content');
const essayToggle = document.querySelector('.essay-toggle')
const essayList = document.querySelector('.essay-list')
const essayName = window.location.pathname.slice(1)

const essays = [
    "i",
    "m"
]

if (toggles && content && essayToggle && essayList) {

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
        })
    })

    essayToggle.addEventListener('click', () => {
        if (essayList.classList.contains('hidden')) {
            essayList.classList.remove('hidden')
        } else {
            essayList.classList.add('hidden')
        }
    })
}

if (essays.includes(essayName)) {

    window.addEventListener("keydown", e => {
        const essayIndex = essays.indexOf(essayName)

        if (e.key === "ArrowRight" && essayIndex < essays.length - 1) {
            window.location.href = essays[essayIndex + 1]
        }

        if (e.key === "ArrowLeft" && essayIndex > 0) {
            window.location.href = essays[essayIndex - 1]
        }
    })

}