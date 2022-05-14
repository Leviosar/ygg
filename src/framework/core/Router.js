export default class Router {
    constructor() {
        this.routes = []
    }

    register(page) {
        const hit = this.routes.filter(route => route.path === page.path)
        
        if (hit.length > 0) {
            throw `Cannot redeclare ${page.path}`
        }

        this.routes.push(page)
    }

    navigate(path) {
        const hit = this.routes.filter(route => route.path === path)
        
        if (hit.length === 0) {
            throw "Not found"
        }
        
        hit[0].render()
    }
}