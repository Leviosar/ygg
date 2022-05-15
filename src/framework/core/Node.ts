import Leaf from "./Leaf";
import Style from "./Style"

export interface NodeOptions {
    text: string;
    tag: string;
    children: Node[];
    classes: string[];
    id: string;
    events?: Record<string, (event: Event) => void>;
    style: Record<string, string>;
}

export default class Node {

    private options: NodeOptions;
    private tag: HTMLElement;
    private children: Node[];
    private shadow?: ShadowRoot;
    private leaf: Leaf;

    constructor(options: NodeOptions) {
        this.options = options
        this.leaf = document.createElement('leaf')
    }

    set text(value: string) {
        this.options.text = value
    }

    mount() {
        if (this.options.tag === undefined) {
            throw "Tag option is required"
        }

        this.children = this.options.children ?? []

        this.tag = document.createElement(this.options.tag)

        this.addListeners()

        if (this.options.classes !== undefined) {
            for (const _class of this.options.classes) {
                this.tag.classList.add(_class)
            }
        }

        this.shadow = this.leaf.attachShadow({mode: 'open'})
        this.shadow.appendChild(this.style())

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

        this.leaf.appendChild(this.tag)

        return this.leaf
    }

    style() {
        const style = document.createElement('style')
        style.textContent = Style.parse(this.tag, this.options.style)
        return style
    }
}