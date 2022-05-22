import Node, { NodeOptions } from "../core/Node"

export class Section extends Node {
    constructor(options: NodeOptions) {
        options.tag = "section"
        super(options)
    }
}