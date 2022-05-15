import Element, { NodeOptions } from "../core/Node"

export class Article extends Element {
    constructor(options: NodeOptions) {
        options.tag = "li"
        super(options)
    }
}