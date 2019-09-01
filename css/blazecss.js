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
  card: {
  },
  field: {
    _base: "field field--${VARIANT}",
    default: "field",
  },
  container: "container container--medium rg-block",
  grid: {
    outer: "grid grid--wrap",
    w25: "grid__cell--width-25 card__content",
    w33: "grid__cell--width-33 card__content",
    w50: "grid__cell--width-50 card__content",
    w66: "grid__cell--width-66 card__content",
    w75: "grid__cell--width-75 card__content",
    w100: "grid__cell--width-100 card__content",
  },
  h0: "heading heading--super",
  h1: "heading heading--xlarge",
  h2: "heading heading--large",
  h3: "heading heading--medium",
  h4: "heading heading--small",
  h5: "heading heading--xsmall",
  menu: { // #! TODO should this be called dropdown? I think so
    outer: 'menu menu--high',
    default: 'menu__item',
    _base: 'menu__item menu__item--${VARIANT} rg-pointer',
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
  nav: {
    //vertical: "menu menu--high",
    link: "menu__item label",
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
    top: "bubble bubble--top rg-bottom-100 rg-absolute",
    bottom: "bubble bubble--bottom rg-top-100 rg-absolute",
    left: "bubble bubble--left rg-right-100 rg-absolute",
    right: "bubble bubble--right rg-left-100 rg-absolute",
    outer: "rg-relative",
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
