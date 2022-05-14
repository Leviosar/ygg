import Element from "../core/Element.js"

export function UnorderedList(options) {
    return new _UnorderedList(options)
} 

class _UnorderedList extends Element {
    constructor(options) {
        options.tag = "ul"
        super(options)
    }
}