import Element from "../core/Element.js"

export function ListItem(options) {
    return new _ListItem(options)
} 

class _ListItem extends Element {
    constructor(options) {
        options.tag = "li"
        super(options)
    }
}