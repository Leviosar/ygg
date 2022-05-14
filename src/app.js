// import Pages from './pages/index.js'
import ListItem from './framework/components/ListItem.js'
import UnorderedList from './framework/components/UnorderedList.js'
import Lib from './framework/core/Lib.js'

// for (const Page of Pages) {
//     Router.register(Page)
// }

// Router.navigate('/')

const root = new Lib({
    element: 'body',
    app: UnorderedList({
        children: [
            ListItem({text: "1"}),
        ]
    })
})

let i = 0
setInterval(() => {
    root.app.options.children[0].text = i
    i++
    root.render()
}, 1000)

// root.appendChild(app.render())