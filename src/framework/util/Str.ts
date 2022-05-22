export default class Str {
    public static kebabelize(value: string): string {
        return value.split('').map(
            (symbol, index) => {
                if (symbol.toUpperCase() === symbol) {
                    return `${index !== 0 ? '-' : ''}${symbol.toLowerCase()}`
                } else {
                    return symbol
                }
            }
        ).join('')
    }
}