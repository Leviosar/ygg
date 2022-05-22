import Node, { NodeOptions } from "../core/Node"
import { Stylesheet } from "../types/Stylesheet"

export function Image(options: ImageNodeOptions) {
    return new _Image(options)
}

interface ImageNodeOptions extends NodeOptions {
    source: string;
    width?: string;
    height?: string;
}

class _Image extends Node {
    
    constructor(options: ImageNodeOptions) {
        super(options)

        options.tag = "img"

        this.attributes.src = options.source

        if (options.width) {
            this.attributes.width = options.width
        }

        if (options.height) {
            this.attributes.height = options.height
        }
    }

    specificSetup() {
        (this.tag as HTMLImageElement).src = this.attributes.src 
    }
}