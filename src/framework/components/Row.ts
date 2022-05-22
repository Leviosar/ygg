import Node, { NodeOptions } from "../core/Node"
import { Stylesheet } from "../types/Stylesheet"

export function Row(options: NodeOptions) {
    return new _Row(options)
} 

class _Row extends Node {
    protected baseStyle?: Stylesheet = {
        display: 'flex',
        flexDirection: 'row'
    }

    constructor(options: NodeOptions) {
        options.tag = "div"

        super(options)
        
        if (options.classes === undefined) {
            options.classes = ['row']
        } else {
            options.classes.push('row')
        }
    }
}