export default {
  _name: 'bootstrap',
  alert: {
    _base: "alert alert-${VARIANT}",
    _missing: ["brand", "error"],
    _default: "secondary",
  },
  badge: {
    _base: "badge badge-${VARIANT}",
  },
  button: {
    _base: "btn btn-${VARIANT}",
    close: "close",
  },
  field: {
    default: "form-control",
  },
  container: "container p-4 d-block",
  grid: {
    outer: "row",
    w25: "col-sm-3 d-block",
    w33: "col-sm-4 d-block",
    w50: "col-sm-6 d-block",
    w66: "col-sm-8 d-block",
    w75: "col-sm-9 d-block",
    w100: "col-sm-12 d-block",
  },
  menu: {
    outer: 'btn-group-vertical w-100 p-0',
    default: 'btn btn-light rg-pointer',
    disabled: 'btn btn-light disabled',
    selected: 'btn btn-primary',
    _base: 'btn btn-${VARIANT} rg-pointer',
    hover: "active"
  },
  modal: {
    root: "modal d-block show fade",
    mask: "modal-backdrop fade show",
    outer: "modal-dialog",
    inner: "modal-content",
    header: "modal-header",
    header_title: "modal-title",
    body: "modal-body",
    footer: "modal-footer",
  },
  nav: {
    vertical: "nav flex-column mb-4",
    link: "nav-link",
  },
  tab_outer: "",
  tab_nav: {
    outer: "nav nav-tabs",
    default: "nav-item nav-link rg-pointer text-primary",
    disabled: "nav-item nav-link disabled",
    active: "nav-item nav-link active rg-pointer",
  },
  tab_content: {
    default: "d-none",
    active: "border rounded-bottom card-body border-top-0",
  },
  toast_outer: {
  },
  toast: {
    _base: "toast show fade bg-${VARIANT}",
  },
  tooltip: {
    _base: "tooltip bs-tooltip-${VARIANT} show fade",
    _default: "top",
    inner: "tooltip-inner",
    arrow: "arrow",
  },
  card: {
    outer: "card mb-4",
    inner: "card-body",
  }
}