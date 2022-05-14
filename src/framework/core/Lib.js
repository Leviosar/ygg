import Leaf from "./Leaf"

export class Gruta {
    constructor(options) {
        this.element = document.querySelector(options.element)

        if (!this.element) {
            throw "Element provided is not present on the DOM"
        }

        this.app = options.app
    }

    registerLeaf() {
        if (!customElements.get('leaf')) {
            customElements.define('leaf', Leaf)
        }
    }

    render() {
        this.element.innerHTML = ''
        this.element.appendChild(this.app.render())
    }
}