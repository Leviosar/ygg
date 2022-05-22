import Str from './../../util/Str'

export default class JsToCss {
    parse(object: Record<string, string>) {
        let content = ""

        for (const key in object) {
            const value = object[key]
            content += `${Str.kebabelize(key)}: ${value};\n`
        }

        return content
    }
} 