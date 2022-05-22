import Node, { NodeOptions } from "../core/Node"

export function TextField(options: NodeOptions) {
    return new _TextField(options)
}

export class _TextField extends Node {
    constructor(options: NodeOptions) {
        options.tag = "input"
        super(options)
    }
}