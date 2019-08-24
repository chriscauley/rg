import riot from 'riot'
import route from 'riot-route'

import "../all"
import '../css'
import './tags'

const routeTag = (tagName='home', opts={}) => riot.mount('*', { ...opts, tagName })

route("/", routeTag)
route("/component/*/", routeTag)
route("/framework/*/", name => routeTag('framework', { name }))


route.start()
route.exec()
