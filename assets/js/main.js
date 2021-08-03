const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab');
const panes = $$('.tab-pane');
const line = $('.line');

tabs.forEach((tab, indexTab) => {
    tab.onclick = function () {
        $('.tab.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');
        this.classList.add('active');
        panes[indexTab].classList.add('active');
        line.style.left = 25 * indexTab + '%';
    };
});
