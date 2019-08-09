import riot from 'riot'
import route from 'riot-route'

import "../all"
import './tags'

CSSMixin.use("bootstrap")

const routeTag = (tagName='home') => riot.mount('*', { tagName })

route("/", routeTag)
route("/component/*", routeTag)


route.start()
route.exec()
