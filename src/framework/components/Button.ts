import Element, { NodeOptions } from "../core/Node"

export class Button extends Element {
    constructor(options: NodeOptions) {
        options.tag = "button"
        super(options)
    }
}