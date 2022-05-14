import Element from "../core/Element.js"

export class Input extends Element {
    constructor(options) {
        options.tag = "input"
        super(options)
    }
}