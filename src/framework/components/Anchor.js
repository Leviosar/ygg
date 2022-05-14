import Element from "../core/Element.js"

export class Anchor extends Element {
    constructor(options) {
        options.tag = "a"
        super(options)
    }
}