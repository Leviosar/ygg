import Element from "../core/Element.js"

export class Button extends Element {
    constructor(options) {
        options.tag = "button"
        super(options)
    }
}