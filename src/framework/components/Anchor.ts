import Element, { NodeOptions } from "../core/Node.js"

export class Anchor extends Element {
    constructor(options: NodeOptions) {
        options.tag = "a"
        super(options)
    }
}