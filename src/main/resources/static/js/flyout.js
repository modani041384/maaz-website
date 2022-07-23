export class Flyout {
    constructor(flyoutButton, flyoutPanel) {
        if (typeof flyoutButton === 'string') {
            this.flyoutButton = document.querySelector(flyoutButton);
        } else {
            this.flyoutButton = flyoutButton;
        }
        if (typeof flyoutPanel === 'string') {
            this.flyoutPanel = document.querySelector(flyoutPanel);
        } else {
            this.flyoutPanel = flyoutPanel;
        }
        this.active = false;
        this.flyoutButton.addEventListener('click', this.toggleFlyout.bind(this));
    }
    toggleFlyout() {
        this.active = !this.active;
        document.body.classList.toggle('overflow-hidden');
        this.flyoutPanel.classList.toggle('active');
        this.flyoutPanel.classList.toggle('mobile-active');
        this.flyoutButton.querySelector('.icon').innerText = this.active ? 'close' : 'menu';
    }
}