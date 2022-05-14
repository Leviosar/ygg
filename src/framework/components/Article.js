import Element from "../core/Element.js"

export class Article extends Element {
    constructor(options) {
        options.tag = "li"
        super(options)
    }
}