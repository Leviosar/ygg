import JsToCss from "./parsers/JsToCSS"
import Style from "./Style"

export default class Element {
    constructor(options) {
        this.options = options
    }

    set text(value) {
        this.options.text = value
    }

    leaf() {
        return this.document.createElement('leaf')
    }

    mount() {
        if (this.options.tag === undefined) {
            throw "Tag option is required"
        }

        this.children = this.options.children ?? []

        this.tag = this.leaf().appendChild(document.createElement(this.options.tag))

        this.addListeners()

        if (this.options.classes !== undefined) {
            for (const _class of this.options.classes) {
                this.tag.classList.add(_class)
            }
        }

        this.shadow = this.tag.attachShadow({mode: 'open'})
        this.shadow.appendChild()

        this.tag.id = this.options.id ?? ""

        this.tag.innerText = this.options.text ?? ""
    }

    addListeners() {
        for (const event in this.options.events) {
            this.tag.addEventListener(`${event}`, this.options.events[event])
        }
    }

    render() {
        this.mount()

        const elements = this.children.map(child => child.render())

        this.tag.append(...elements)

        return this.tag
    }

    style() {
        return new Style(this.tag, this.options.style).style
    }
}