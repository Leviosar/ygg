import Element, { NodeOptions } from "../core/Node"

export class Nav extends Element {
    constructor(options: NodeOptions) {
        options.tag = "nav"
        super(options)
    }
}