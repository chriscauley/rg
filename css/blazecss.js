export default {
  _name: 'blazecss',
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
    selected: "menu__item menu__item--active"
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
  toast_outer: {
    _base: "toasts toasts--${VARIANT}",
    default: "toasts toasts--bottomright",
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
}
