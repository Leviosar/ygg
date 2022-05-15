import Element, { NodeOptions } from "../core/Node"

export class Input extends Element {
    constructor(options: NodeOptions) {
        options.tag = "input"
        super(options)
    }
}