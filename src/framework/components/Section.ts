import Element, { NodeOptions } from "../core/Node"

export class Section extends Element {
    constructor(options: NodeOptions) {
        options.tag = "section"
        super(options)
    }
}