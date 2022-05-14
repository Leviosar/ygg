import Element from "../core/Element";

export class Div extends Element {
    constructor(options) {
        options.tag = "div"
        super(options)
    }
}