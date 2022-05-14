export default class JsToCss {
    parse(object) {
        content = "";

        for (const key in object) {
            const value = object[key]
            content += `${this.kebabize(key)}: ${value};\n`;
        }
    }

    kebabize = str => {
        return str.split('').map((letter, idx) => {
          return letter.toUpperCase() === letter
           ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
           : letter;
        }).join('')
    }
} 