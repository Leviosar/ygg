export default class JsToCss {
    parse(object: Record<string, string>) {
        let content = ""

        for (const key in object) {
            const value = object[key]
            content += `${this.kebabize(key)}: ${value};\n`
        }
    }

    kebabize(str: string) : string {
        return str.split('').map(
            (letter, idx) => letter.toUpperCase() === letter ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}` : letter
        ).join('')
    }
} 