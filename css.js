window.CSSMixin = (() => {
  const css = {}
  const sources = {}
  const getLinks = () => Array.prototype.slice.call(document.querySelectorAll("link"))

  const _variants = ['brand', 'info', 'warning', 'success', 'error', 'primary', 'secondary', 'light', 'dark']

  const variants = {
    alert: _variants,
    badge: _variants,
    button: _variants,
    menu: ['disabled', 'active', 'hover', 'default'],
    tooltip: ['top', 'bottom', 'left', 'right'],
    field: ['success', 'error', 'disabled'],
  }

  const register = (source) => {
    Object.keys(source).filter(n => !n.startsWith("_")).forEach( component_name => {
      const component = source[component_name]
      if (component._base) {
        const _variants = component.variants || variants[component_name] || []
        _variants.filter(name => !component[name]).forEach( name => {
          component[name] = component._base.replace("${VARIANT}", name)
        })
      }

      const _default = component._default || "default"
      component['undefined'] = component['undefined'] || component[_default]
    })
    sources[source._name] = source
  }

  register({
    _name: 'blazecss',
    _match: () => getLinks.find(l => l.href.match(/blaze.(min.)?css/)),
    alert: {
      outer: "alerts",
      _base: "alerts__alert alerts__alert--${VARIANT}",
      toString() { return this.default },
    },
    badge: {
      _base: "button button--${VARIANT} tag",
    },
    button: {
      close: "button button--close",
      _base: "button button--${VARIANT}",
    },
    field: {
      _base: "field field--${VARIANT}",
      default: "field",
    },
    menu: {
      outer: 'menu menu--high',
      default: 'menu__item',
      _base: 'menu__item menu__item--${VARIANT}',
    },
    tooltip: {
      _base: "bubble bubble--${VARIANT}",
      _default: "top",
    },
  })

  register({
    _name: 'blazeui',
    _match: () => getLinks.find(l => l.href.match(/@blaze\/css/)),
    alert: {
      _base: "c-alert c-alert--${VARIANT}"
    },
    button: {
      close: "c-button c-button--close",
      _base: ""
    },
    tooltip: {
      _base: "c-badge c-badge--brand c-tooltip c-tooltip--${VARIANT}",
      _default: "top",
    },
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