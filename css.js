window.CSSMixin = (() => {
  const css = {}
  const sources = {}
  const getLinks = () => Array.prototype.slice.call(document.querySelectorAll("link"))

  const register = (source) => {
    const alert_names = ['default', 'brand', 'info', 'warning', 'success', 'error', 'primary', 'secondary']
    alert_names.filter(name => !source.alert[name]).forEach( name => {
      source.alert[name] = source.alert._base.replace("${TYPE}", name)
    })
    sources[source._name] = source
  }

  register({
    _name: 'blazecss',
    _match: () => getLinks.find(l => l.href.match(/blaze.(min.)?css/)),
    alert: {
      outer: "alerts",
      _base: "alerts__alert alerts__alert--${TYPE}",
      toString() { return this.default },
    },
    button: {
      close: "button button--close",
    }
  })

  register({
    _name: 'blazeui',
    _match: () => getLinks.find(l => l.href.match(/@blaze\/css/)),
    alert: {
      _base: ""
    },
    button: {
      close: "c-button c-button--close",
    }
  })

  css.use = name => {
    if (!sources[name]) {
      throw `Unknown css variant: ${name}`
    }
    css.current = sources[name]
    css._current = name
  }

  // default to blazecss for now
  // this will probably switch to boot strap eventually
  css.use('blazecss')

  return {
    init(opts) {
      this.css = css.current
    }
  }
})()