import JsToCss from "./parsers/JsToCSS"

export default class Style {

    static parser = new JsToCss();

    static parse(tag: HTMLElement, style: Record<string, string>) : string {
        const tagName = tag.tagName.toLowerCase()

        return `
            ${tagName} {
                ${Style.parser.parse(style)}
            }
        `
    }
}