import Node, { NodeOptions } from "../core/Node";

export class Div extends Node {
    constructor(options: NodeOptions) {
        options.tag = "div"
        super(options)
    }
}