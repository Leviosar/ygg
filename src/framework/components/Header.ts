import Element, { NodeOptions } from "../core/Node"

export class Header extends Element {
    constructor(options: NodeOptions) {
        options.tag = "header"
        super(options)
    }
}