import Element, { NodeOptions } from "../core/Node";

export class Div extends Element {
    constructor(options: NodeOptions) {
        options.tag = "div"
        super(options)
    }
}