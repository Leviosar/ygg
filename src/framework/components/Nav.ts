import Node, { NodeOptions } from "../core/Node"

export class Nav extends Node {
    constructor(options: NodeOptions) {
        options.tag = "nav"
        super(options)
    }
}