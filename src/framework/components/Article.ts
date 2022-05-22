import Node, { NodeOptions } from "../core/Node"

export class Article extends Node {
    constructor(options: NodeOptions) {
        options.tag = "article"
        super(options)
    }
}