
export class TabHeader {
    constructor(element, index) {
        this.element = element;
        this.activeIndex = +(element.dataset.targetIndex || index);
        if (!this.element.classList.contains('initialized')) {
            this.element.classList.add('initialized');
            this.element.addEventListener('click', () => {
                if (this.onTabActive && typeof this.onTabActive === 'function') {
                    this.onTabActive(this.activeIndex);
                }
            });
        }
    }
    active() {
        this.element.classList.add('active');
    }
    inactive() {
        this.element.classList.remove('active');
    }
}

export class Content {
    constructor(element, index) {
        this.element = element;
        this.activeIndex = element.dataset.index || index;
        this.name = element.id;
    }
    active() {
        this.element.classList.add('active');
    }
    inactive() {
        this.element.classList.remove('active');
    }
}

export class Tab {
    constructor(element) {
        this.container = element;
        var headers = element.querySelectorAll('.tab-header');
        this.headers = [...headers].map((e, index) => {
            let header = new TabHeader(e, index);
            header.onTabActive = (index) => {
                this.active({index: index});
            }
            return header;
        });
        var contents = element.querySelectorAll('.tab-content');
        this.contents = [...contents].map((e, index) => new Content(e, index));
    }
    active({index, name}) {
        this.headers.forEach(e => e.inactive());
        this.contents.forEach(e => e.inactive());
        if (name) {
            const activeTab = this.contents.find(c => c.name == name);
            if (activeTab) {
                this.headers.find( h => h.activeIndex == activeTab.activeIndex)?.active();
                activeTab.active();
                return;
            }
        }
        if (index != undefined && index >= 0) {
            this.headers.find( h => h.activeIndex == index)?.active();
            this.contents.find(c => c.activeIndex == index)?.active();
        }
    }
}
/**
 * 
 * @returns {Tab[]}
 */
export function Init() {
    var tabs = document.querySelectorAll('.tab-container');
    return [...tabs].map(e => new Tab(e));
}