import Element, { NodeOptions } from "../core/Node"

export class Main extends Element {
    constructor(options: NodeOptions) {
        options.tag = "main"
        super(options)
    }
}