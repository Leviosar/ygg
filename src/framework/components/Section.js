import Element from "../core/Element.js"

export class Section extends Element {
    constructor(options) {
        options.tag = "section"
        super(options)
    }
}