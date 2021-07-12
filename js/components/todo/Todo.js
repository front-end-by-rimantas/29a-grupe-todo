class Todo {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
    }

    init() {
        if (!this.isValidSelector() ||
            !this.findTargetElement()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: selector turi buti ne tuscias string');
            return false;
        }
        return true;
    }

    findTargetElement() {
        this.DOM = document.querySelector(this.selector);

        if (!this.DOM) {
            console.error('ERROR: pagal pateikta selector, elementas neegzistuoja');
            return false;
        }

        return true;
    }

    render() {
        const HTML = '<div class="list">LIST</div>';
        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }
}

export { Todo }