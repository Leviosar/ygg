import Leaf from "./Leaf"
import Node from "./Node";

interface YggOptions {
    element: HTMLElement | string;
    app: Node;
}

export class Ygg {

    private element: HTMLElement;
    private app: Node;

    constructor(options: YggOptions) {
        if (typeof options.element === 'string') {
            this.element = document.querySelector(options.element)
        } else if (options.element instanceof HTMLElement) {
            this.element = options.element
        }

        if (!this.element) {
            throw "Element provided is not present on the DOM"
        }

        this.app = options.app

        this.registerLeaf()
    }

    registerLeaf() {
        if (!customElements.get('ygg-leaf')) {
            customElements.define('ygg-leaf', Leaf)
        }
    }

    render() {
        this.element.innerHTML = ''
        this.element.appendChild(this.app.render())
    }
    
}