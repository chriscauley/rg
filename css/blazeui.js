export default {
  _name: 'blazeui',
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
}
