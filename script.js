const toggles = document.querySelectorAll('.toggle');
const content  = document.querySelectorAll('.content');
const fundamentalsToggle = document.querySelector('.fundamentals-toggle')
const fundamentalsList = document.querySelector('.fundamentals-list')
const fieldmanualToggle = document.querySelector('.fieldmanual-toggle')
const fieldmanualList = document.querySelector('.fieldmanual-list')
const pageName = window.location.pathname.slice(1)

const fundamentals = [
    "i",
    "m",
    "n",
    "b"
]

const fieldmanual = [
    "i2",
    "d",
    "c",
    "p"
]

if (toggles && content && fundamentalsToggle && fundamentalsList) {

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

    fundamentalsToggle.addEventListener('click', () => {
        if (fundamentalsList.classList.contains('hidden')) {
            fundamentalsList.classList.remove('hidden')
        } else {
            fundamentalsList.classList.add('hidden')
        }
    })

    fieldmanualToggle.addEventListener('click', () => {
        if (fieldmanualList.classList.contains('hidden')) {
            fieldmanualList.classList.remove('hidden')
        } else {
            fieldmanualList.classList.add('hidden')
        }
    })
}

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

if (fieldmanual.includes(pageName)) {
    window.addEventListener("keydown", e => {
        const essayIndex = fieldmanual.indexOf(pageName)

        if (e.key === "ArrowRight" && essayIndex < fieldmanual.length - 1) {
            window.location.href = fieldmanual[essayIndex + 1]
            console.log("moving to the right")
        }

        if (e.key === "ArrowLeft" && essayIndex > 0) {
            window.location.href = fieldmanual[essayIndex - 1]
        }
    })
}