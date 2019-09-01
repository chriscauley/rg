const _var2color = {
  brand: "blue",
  info: "blue",
  warning: "yellow",
  success: "green",
  error: "red",
  primary: "blue",
  secondary: "yellow",
  light: "grey",
  dark: "grey",
  danger: "red",
}

const transformColor = name => _var2color[name]

export default {
  _name: "tailwind",
  _var2color,
  alert: {
    //"outer": "alerts ",
    //"undefined": "alert alert-secondary ",
    /*"_missing": [
      brand",
      error"
    ],*/
    _base: "bg-${VARIANT}-100 border border-${VARIANT}-400 text-${VARIANT}-700 px-4 py-3 rounded relative mb-4",
    _default: "brand",
    _transform: transformColor,
  },
  button: {
    close: "absolute top-0 right-0 mt-3 mr-4 text-2xl leading-none",
    _base: "bg-${VARIANT}-500 hover:bg-${VARIANT}-700 text-white font-bold py-2 px-4 rounded",
    _default: "brand",
    _transform: transformColor,
  },
  badge: {
    _base: "bg-${VARIANT}-500 hover:bg-${VARIANT}-700 text-white text-xs px-1 font-bold rounded",
    _transform: transformColor,
    _default: "brand",
  },
  field: {
    _base: "field field--${VARIANT} ",
    default: "form-control ",
    success: "field field--success ",
    error: "field field--error ",
    disabled: "field field--disabled ",
    undefined: "form-control "
  },
  card: {
    outer: "card mb-4 ",
    inner: "card-body "
  },
  container: "container p-4 d-block ",
  grid: {
    outer: "flex mb-4 flex-wrap",
    w25: "w-1/4 p-4 flex-grow",
    w33: "w-1/3 p-4 flex-grow",
    w50: "w-1/2 p-4 flex-grow",
    w66: "w-2/3 p-4 flex-grow",
    w75: "w-3/4 p-4 flex-grow",
    w100: "w-full p-4 flex-grow",
  },
  h1: "text-4xl mb-4",
  h2: "text-3xl mb-4",
  h3: "text-2xl mb-2",
  h4: "text-xl mb-2",
  h5: "text-lg mb-1",
  menu: {
    outer: "btn-group-vertical w-100 p-0 ",
    default: "btn btn-light rg-pointer ",
    _base: "btn btn-${VARIANT} rg-pointer ",
    selected: "btn btn-primary ",
    disabled: "btn btn-light disabled ",
    active: "btn btn-active rg-pointer ",
    hover: "active ",
    undefined: "btn btn-light rg-pointer "
  },
  modal: {
    root: "fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center",
    mask: "bg-gray-100 opacity-50 w-full h-full absolute",
    outer: "bg-white shadow-lg rounded z-10",
    ghost: "modal modal--ghost ",
    header: "px-6",
    header_title: "font-bold text-xl mb-2",
    body: "px-6 pb-4 ",
    footer: "px-6 pb-4",
    inner: "modal-content "
  },
  nav: {
    link: "p-2 hover:bg-gray-200 text-blue-400 cursor-pointer",
    vertical: "flex flex-col mb-4"
  },
  pagination: {
    outer: "pagination ",
    controls: {
      left: "pagination__controls pagination__controls--backward ",
      right: "pagination__controls pagination__controls--forward ",
      center: "pagination__controls "
    },
    item: "pagination__control ",
    page: "pagination__page ",
    active_page: "pagination__page pagination__page--current ",
    ellipsis: "pagination__ellipsis "
  },
  tab_outer: " ",
  tab_nav: {
    outer: "nav nav-tabs ",
    default: "nav-item nav-link rg-pointer text-primary ",
    active: "nav-item nav-link active rg-pointer ",
    disabled: "nav-item nav-link disabled ",
    undefined: "nav-item nav-link rg-pointer text-primary "
  },
  tab_content: {
    default: "d-none ",
    active: "border rounded-bottom card-body border-top-0 ",
    undefined: "d-none "
  },
  toast_outer: {
    _base: "toasts toasts--${VARIANT} ",
    default: "toasts toasts--bottomright ",
    topleft: "toasts toasts--topleft ",
    bottomleft: "toasts toasts--bottomleft ",
    topright: "toasts toasts--topright ",
    bottomright: "toasts toasts--bottomright "
  },
  toast: {
    _base: "toast show fade bg-${VARIANT} ",
    brand: "toast show fade bg-brand ",
    info: "toast show fade bg-info ",
    warning: "toast show fade bg-warning ",
    success: "toast show fade bg-success ",
    error: "toast show fade bg-error ",
    primary: "toast show fade bg-primary ",
    secondary: "toast show fade bg-secondary ",
    light: "toast show fade bg-light ",
    dark: "toast show fade bg-dark ",
    danger: "toast show fade bg-danger "
  },
  tooltip: {
    //arrow: "arrow ",
    _default: "top ",
    top: "rg-bottom-100 absolute min-w-full mb-2 z-10",
    bottom: "rg-top-100 absolute min-w-full mt-2 z-10",
    left: "rg-right-100 absolute min-w-full mr-2 z-10",
    right: "rg-left-100 absolute min-w-full ml-2 z-10",
    outer: "relative",
    inner: "bg-black text-white p-1 rounded",
  },
  switch: {
    outer: "toggle toggle--primary ",
    wrapper: "toggle__wrapper ",
    input: " ",
    track: "toggle__track ",
    handle: "toggle__handle "
  },
}
