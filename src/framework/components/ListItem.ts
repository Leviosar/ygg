import Node, { NodeOptions } from "../core/Node"

export function ListItem(options: NodeOptions) {
    return new _ListItem(options)
} 

class _ListItem extends Node {
    constructor(options: NodeOptions) {
        options.tag = "li"
        super(options)
    }
}