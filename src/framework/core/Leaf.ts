export default class Leaf extends HTMLElement {
    private _shadow?: ShadowRoot;

    constructor() {
        super()
    }

    set shadow(value: ShadowRoot) {
        this._shadow = value
    }

    get shadow(): ShadowRoot {
        return this._shadow
    }
}