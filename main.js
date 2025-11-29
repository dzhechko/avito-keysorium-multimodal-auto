import { sections } from './data.js';
import { createSection } from './components.js';
import { initInteractions, initDemo } from './logic.js';

document.addEventListener('DOMContentLoaded', () => {
    const contentRoot = document.getElementById('content-root');
    const desktopMenu = document.getElementById('desktop-menu');
    const mobileMenu = document.getElementById('mobile-menu');


    sections.forEach(section => {

        const sectionEl = createSection(section);
        contentRoot.appendChild(sectionEl);


        const linkHtml = `<a href="#${section.id}" class="hover:text-avito-blue transition">${section.title}</a>`;
        desktopMenu.innerHTML += linkHtml;
        mobileMenu.innerHTML += linkHtml;
    });


    initInteractions();
    initDemo();


    lucide.createIcons();
});
