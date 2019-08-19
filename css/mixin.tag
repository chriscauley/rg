import blazecss from './blazecss'
import blazeui from './blazeui'
import bootstrap from './bootstrap'

const CSSMixin = (() => {
  const recursivelyRightPad = obj => {
    // this is to make the class names all end in " " for composition purposes
    if (!obj) {
      return
    }
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === "string") {
        if (!obj[key].endsWith(" ")) {
          obj[key] += " "
        }
      } else {
        recursivelyRightPad(obj[key])
      }
    })
  }
  const css = {}
  const sources = {}

  const use = name => {
    if (!sources[name]) {
      throw `Unknown css variant: ${name}`
    }
    css.current = sources[name]
    css._current = name
  }

  const _variants = ['brand', 'info', 'warning', 'success', 'error', 'primary', 'secondary', 'light', 'dark', "danger"]

  const variants = {
    alert: _variants,
    badge: _variants,
    button: _variants,
    field: ['success', 'error', 'disabled'],
    menu: ['disabled', 'active', 'hover', 'default'],
    toast: _variants,
    tooltip: ['top', 'bottom', 'left', 'right'],
    toast_outer: ['topleft', 'bottomleft', 'topright', 'bottomright'],
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
    source.VARIANTS = variants
    source.use = use
    Object.keys(source).filter(n => !n.startsWith("_")).forEach( component_name => {
      const component = source[component_name]
      //console.log(source._name, component_name)
      if (typeof component === "string") {
        return
      }
      const _variants = variants[component_name] || []
      const _default = component._default || "default"
      const _missing = component._missing || []
      if (component._base) {
        _variants.filter(name => !component[name]).forEach( name => {
          const name2 = _missing.indexOf(name) === -1 ? name:_default
          component[name] = component._base.replace("${VARIANT}", name2)
        })
      }

      component['undefined'] = component['undefined'] || component[_default]
      if (matches[component_name] && !component.match) {
        component.match = obj => {
          return component[matches[component_name](obj)] || component.default
        }
      }
    })
    sources[source._name] = source
    recursivelyRightPad(source)
    source._name = source._name.trim()
  }

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

  // default to blazecss for now
  // this will probably switch to boot strap eventually
  register(blazecss)
  register(blazeui)
  register(bootstrap)

  use('blazecss')

  return {
    init(opts) {
      this.css = css.current
    },
    scopeCSS(name) {
      // "elevates" a css to the primary level, ie css.pagination.outer => css.outer
      const current = deepClone(css.current)
      Object.assign(current, current[name])
      this.css = current
    },
    use,
    variants,
  }
})()
riot.mixin('CSSMixin',CSSMixin)

export default CSSMixin