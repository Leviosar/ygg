import Node, { NodeOptions } from "../core/Node"

export function Anchor(options: AnchorNodeOptions) {
    return new _Anchor(options)
}

export interface AnchorNodeOptions extends NodeOptions {
    href?: string;
    target?: string;
}

export class _Anchor extends Node {
    constructor(options: AnchorNodeOptions) {
        options.tag = "a"

        super(options)
    
        this.attributes.href = options.href
        this.attributes.target = options.target
    }
}