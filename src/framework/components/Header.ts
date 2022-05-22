import Node, { NodeOptions } from "../core/Node"

export class Header extends Node {
    constructor(options: NodeOptions) {
        options.tag = "header"
        super(options)
    }
}