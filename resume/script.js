// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'scale(1.02)';
        });

        section.addEventListener('mouseleave', () => {
            section.style.transform = 'scale(1)';
        });
    });

    const skillItems = document.querySelectorAll('#skills li');

    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('highlight');
        });
    });
});

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

const headerTitle = document.querySelector('header h1');
typeWriter(headerTitle, 'Kefan Xu');
