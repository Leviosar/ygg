import Node, { NodeOptions } from "../core/Node"

export function Button(options: NodeOptions) {
    return new _Button(options)
}

export class _Button extends Node {
    constructor(options: NodeOptions) {
        options.tag = "button"
        super(options)
    }
}