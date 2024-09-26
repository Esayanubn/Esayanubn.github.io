// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(item => {
        const header = item.querySelector('h3');
        const content = item.querySelector('.content');
        
        // 初始化所有项目为折叠状态
        content.style.maxHeight = null;
        item.classList.remove('active');

        header.addEventListener('click', function() {
            this.parentElement.classList.toggle('active');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    const headerTitle = document.querySelector('header h1');
    typeWriter(headerTitle, 'Kefan Xu');
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
