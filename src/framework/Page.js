export default class BasePage {
    constructor() {
        this.elements = []
    }

    render() {
        for (const element of this.elements) {
            element.render()
        }
    }
}