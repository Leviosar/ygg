import Element, { NodeOptions } from "../core/Node"

export function UnorderedList(options: NodeOptions) {
    return new _UnorderedList(options)
} 

class _UnorderedList extends Element {
    constructor(options: NodeOptions) {
        options.tag = "ul"
        super(options)
    }
}