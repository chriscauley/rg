window.CSSMixin = (() => {
  const css = {}
  const sources = {}
  const getLinks = () => Array.prototype.slice.call(document.querySelectorAll("link"))

  const _variants = ['brand', 'info', 'warning', 'success', 'error', 'primary', 'secondary', 'light', 'dark']

  const variants = {
    alert: _variants,
    badge: _variants,
    button: _variants,
    field: ['success', 'error', 'disabled'],
    menu: ['disabled', 'active', 'hover', 'default'],
    toast: _variants,
    tooltip: ['top', 'bottom', 'left', 'right'],
    toast_align: ['topleft', 'bottomleft', 'topright', 'bottomright'],
  }

  const matches = {
    tab_content: tab => {
      if (tab.disabled) {
        return "disabled"
      }
      return tab.active ? "active" : "default"
    },
  }

  matches.tab_nav = matches.tab_content

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
      if (matches[component_name] && !component.match) {
        component.match = obj => {
          return component[matches[component_name](obj)] || component.default
        }
      }
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
      default: "button",
      _base: "button button--${VARIANT}",
    },
    field: {
      _base: "field field--${VARIANT}",
      default: "field",
    },
    menu: { // #! TODO should this be called dropdown? I think so
      outer: 'menu menu--high',
      default: 'menu__item',
      _base: 'menu__item menu__item--${VARIANT}',
    },
    modal: {
      root: "",
      mask: "overlay",
      outer: "modal",
      ghost: "modal modal--ghost", // blaze css/ui only?
      header: "modal__header",
      header_title: "heading heading--small",
      body: "modal__body",
      footer: "modal__footer modal__footer--block",
    },
    pagination: {
      outer: "pagination",
      controls: {
        left: "pagination__controls pagination__controls--backward",
        right: "pagination__controls pagination__controls--forward",
        center: "pagination__controls",
      },
      item: "pagination__control",
      page: "pagination__page",
      active_page: "pagination__page pagination__page--current",
      ellipsis: "pagination__ellipsis",
    },
    tab_outer: "tabs tabs--primary",
    tab_nav: {
      outer: "tabs__headings",
      default: "tab-heading",
      active: "tab-heading tab-heading--active",
      disabled: "tab-heading tab-heading--disabled",
    },
    tab_content: {
      default: "tabs__tab",
      active: "tabs__tab tabs__tab--active",
    },
    toast_align: {
      _base: "toasts--${VARIANT}",
      default: "toasts--bottomright",
    },
    toast: {
      _base: "toast toast--${VARIANT}",
    },
    tooltip: {
      _base: "bubble bubble--${VARIANT}",
      _default: "top",
    },
    switch: {
      outer: "toggle toggle--primary", // not bothering with variants on this
      wrapper: "toggle__wrapper",
      input: "",
      track: "toggle__track",
      handle: "toggle__handle",
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

  const scopes = {}

  const deepClone = obj => {
    if(obj===null || typeof obj !== "object"){
      return obj;
    }

    if(obj instanceof Date){
      return new Date(obj.getTime());
    }

    if(Array.isArray(obj)){
      var clonedArr = [];
      obj.forEach(function(element){
        clonedArr.push(deepClone(element))
      });
      return clonedArr;
    }

    let clonedObj = new obj.constructor();
    for(var prop in obj){
      if(obj.hasOwnProperty(prop)){
        clonedObj[prop] = deepClone(obj[prop]);
      }
    }
    return clonedObj;
  }

  return {
    init(opts) {
      this.css = css.current
    },
    scopeCSS(name) {
      // "elevates" a css to the primary level, ie css.pagination.outer => css.outer
      const current = deepClone(css.current)
      Object.assign(current, current[name])
      this.css = current
    }
  }
})()