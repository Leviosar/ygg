import { EventHandler } from "../types/EventHandler";
import { Stylesheet } from "../types/Stylesheet";
import Leaf from "./Leaf";
import Style from "./Style"

export interface NodeOptions {
    children: Node[];
    classes: string[];
    events?: Record<string, EventHandler>;
    id: string;
    style: Stylesheet;
    tag: string;
    text: string;
}

export default class Node {

    protected options: NodeOptions;
    protected tag: HTMLElement;
    protected children: Node[];
    protected shadow?: ShadowRoot;
    protected leaf: Leaf;
    protected baseStyle?: Stylesheet;
    protected attributes: Record<string, string> = {};

    constructor(options: NodeOptions) {
        this.options = options
        this.leaf = document.createElement('ygg-leaf') as Leaf
    }

    set text(value: string) {
        this.options.text = value
    }

    mount() {
        if (this.options.tag === undefined) {
            throw "Tag option is required"
        }

        this.children = this.options.children ?? []

        this.createTag()

        this.mergeBaseStyle()

        this.createShadow()

        this.addListeners()

        this.addClasses()

        this.addAttributes()

        this.specificSetup()
    }

    createTag() {
        this.tag = document.createElement(this.options.tag)
        if (this.options.id) this.tag.id = this.options.id
        if (this.options.text) this.tag.innerText = this.options.text
    }

    createShadow() {
        const shadow = this.leaf.attachShadow({mode: 'open'})
        this.shadow = shadow
        this.leaf.shadow = shadow
        this.leaf.shadow.appendChild(this.style())
    }

    addListeners() {
        for (const event in this.options.events) {
            this.tag.addEventListener(`${event.toLowerCase()}`, this.options.events[event])
        }
    }

    addClasses() {
        for (const _class of this.options.classes) {
            this.tag.classList.add(_class)
        }
    }

    addAttributes() {
        for (const key in this.attributes) {
            this.tag.setAttribute(key, this.attributes[key])
        }
    }

    render() {
        this.mount()

        const elements = this.children.map(child => child.render())

        this.tag.append(...elements)

        this.leaf.shadow.appendChild(this.tag)

        return this.leaf
    }

    mergeBaseStyle() {
        this.options.style = { ... this.options.style, ... this.baseStyle}
    }

    style() {
        const style = document.createElement('style')
        style.textContent = Style.parse(this.tag, this.options.style)
        return style
    }

    specificSetup() : void | boolean {
        return true
    }
}