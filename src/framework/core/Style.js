import JsToCss from "./parsers/JsToCSS"

export default class Style {
    constructor(tag, style) {
        this.parser = new JsToCss()
        this.mount(tag, style)    
    }

    mount(tag, style) {
        const tagName = tag.tagName.toLowerCase()

        this.style = `
            ${tagName} {
                ${this.parser.parse(style)}
            }
        `
    }
}