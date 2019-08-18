//const blazecss = require('./blazecss')
import blazecss from './blazecss'
import blazeui from './blazeui'

const CSSMixin = (() => {
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
      //console.log(source._name, component_name)
      if (typeof component === "string") {
        return
      }
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

  const use = name => {
    if (!sources[name]) {
      throw `Unknown css variant: ${name}`
    }
    css.current = sources[name]
    css._current = name
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
  }
})()
riot.mixin('CSSMixin',CSSMixin)

export default CSSMixin