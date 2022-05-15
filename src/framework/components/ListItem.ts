import Element, { NodeOptions } from "../core/Node"

export function ListItem(options: NodeOptions) {
    return new _ListItem(options)
} 

class _ListItem extends Element {
    constructor(options: NodeOptions) {
        options.tag = "li"
        super(options)
    }
}