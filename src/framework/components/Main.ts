import Node, { NodeOptions } from "../core/Node"

export class Main extends Node {
    constructor(options: NodeOptions) {
        options.tag = "main"
        super(options)
    }
}