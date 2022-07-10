export class Accordion {
    constructor(element) {
        this.element = element;
        this.header = this.element.querySelector(':scope > .header');
        this.content = this.element.querySelector(':scope > .content');
        if (this.header && this.content) {
            this.init();
        }
    }

    init() {
        this.element.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggle();
            if (this.content.style.maxHeight) {
                this.content.style.maxHeight = null;
            } else {
                this.content.style.maxHeight = this.content.scrollHeight + "px";
            }
        });
    }

    toggle() {
        this.element.classList.toggle('active');
    }

};