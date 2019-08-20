(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('riot')) :
  typeof define === 'function' && define.amd ? define(['riot'], factory) :
  (factory(global.riot));
}(this, (function (riot$1) { 'use strict';

  riot$1 = riot$1 && riot$1.hasOwnProperty('default') ? riot$1['default'] : riot$1;

  var blazecss = {
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
    container: "container container--medium rg-block",
    grid: {
      outer: "grid",
      w25: "grid__cell--width-25 card__content",
      w33: "grid__cell--width-33 card__content",
      w50: "grid__cell--width-50 card__content",
      w66: "grid__cell--width-66 card__content",
      w75: "grid__cell--width-75 card__content",
      w100: "grid__cell--width-100 card__content",
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

  var blazeui = {
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

  var bootstrap = {
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

  const CSSMixin = (() => {
    const recursivelyRightPad = obj => {
      // this is to make the class names all end in " " for composition purposes
      if (!obj) {
        return
      }
      Object.keys(obj).forEach(key => {
        if (typeof obj[key] === "string") {
          if (!obj[key].endsWith(" ")) {
            obj[key] += " ";
          }
        } else {
          recursivelyRightPad(obj[key]);
        }
      });
    };
    const css = {};
    const sources = {};

    const use = name => {
      if (!sources[name]) {
        throw `Unknown css variant: ${name}`
      }
      css.current = sources[name];
      css._current = name;
    };

    const _variants = ['brand', 'info', 'warning', 'success', 'error', 'primary', 'secondary', 'light', 'dark', "danger"];

    const variants = {
      alert: _variants,
      badge: _variants,
      button: _variants,
      field: ['success', 'error', 'disabled'],
      menu: ['disabled', 'active', 'hover', 'default'],
      toast: _variants,
      tooltip: ['top', 'bottom', 'left', 'right'],
      toast_outer: ['topleft', 'bottomleft', 'topright', 'bottomright'],
    };

    const matches = {
      tab_content: tab => {
        if (tab.disabled) {
          return "disabled"
        }
        return tab.active ? "active" : "default"
      },
    };

    matches.tab_nav = matches.tab_content;

    const register = (source) => {
      source.VARIANTS = variants;
      source.use = use;
      Object.keys(source).filter(n => !n.startsWith("_")).forEach( component_name => {
        const component = source[component_name];
        //console.log(source._name, component_name)
        if (typeof component === "string") {
          return
        }
        const _variants = variants[component_name] || [];
        const _default = component._default || "default";
        const _missing = component._missing || [];
        if (component._base) {
          _variants.filter(name => !component[name]).forEach( name => {
            const name2 = _missing.indexOf(name) === -1 ? name:_default;
            component[name] = component._base.replace("${VARIANT}", name2);
          });
        }

        component['undefined'] = component['undefined'] || component[_default];
        if (matches[component_name] && !component.match) {
          component.match = obj => {
            return component[matches[component_name](obj)] || component.default
          };
        }
      });
      sources[source._name] = source;
      recursivelyRightPad(source);
      source._name = source._name.trim();
    };

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
          clonedArr.push(deepClone(element));
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
    };

    // default to blazecss for now
    // this will probably switch to boot strap eventually
    register(blazecss);
    register(blazeui);
    register(bootstrap);

    use('blazecss');

    return {
      init(opts) {
        this.css = css.current;
      },
      scopeCSS(name) {
        // "elevates" a css to the primary level, ie css.pagination.outer => css.outer
        const current = deepClone(css.current);
        Object.assign(current, current[name]);
        this.css = current;
      },
      use,
      variants,
    }
  })();
  riot.mixin('CSSMixin',CSSMixin);

  riot$1.tag2('rg-alerts', '<div class="{css.alert.outer}"> <div each="{opts.alerts}" class="{className}" if="{isvisible}" onclick="{select}"> <button class="{css.button.close}" if="{dismissable != false}" onclick="{parent.dismiss}"> &times; </button> {text} </div> </div>', '', '', function(opts) {
  		this.mixin("CSSMixin");
  console.log(riot$1.version);
  		this.on("mount", () => this.update());
  		this.on('update', () => {
  			if (!opts.alerts) return
  			opts.alerts.forEach(alert => {
  alert.className = `${this.css.alert[alert.type]} ${alert.select && "rg-pointer"}`;
  				if (typeof alert.isvisible === 'undefined') alert.isvisible = true;
  				if (alert.timeout) {
  					alert.startTimer = () => {
  						alert.timer = setTimeout(() => {
  							this.dismiss({
  								item: alert
  							});
  						}, alert.timeout);
  					};
  					alert.startTimer();
  				}
  			});
  		});

  		this.dismiss = e => {
  			const alert = e.item;
  			alert.isvisible = false;
  			clearTimeout(alert.timer);
  			this.trigger('dismiss', alert);
  			this.update();
  		};

  		this.select = e => {
  			const alert = e.item;
  			if (alert.onclick) alert.onclick(alert);
  			this.trigger('select', alert);
  		};

  });

  riot$1.tag2('rg-bubble', '<div class="context"> <div class="{css.tooltip[opts.bubble.direction]}" if="{isvisible}"> <div class="{css.tooltip.arrow}"></div> <div class="{css.tooltip.inner}">{opts.bubble.text}</div> </div> <div class="content" onmouseover="{showBubble}" onmouseout="{hideBubble}" onclick="{toggleBubble}"> <yield></yield> </div> </div>', 'rg-bubble,rg-bubble [data-is="rg-bubble"],[data-is="rg-bubble"] [data-is="rg-bubble"]{ display: inline-block; position: relative; }', '', function(opts) {
  		this.mixin("CSSMixin");
  		this.showBubble = () => {
  			clearTimeout(this._timer);
  			this.isvisible = true;
  		};

  		this.hideBubble = () => {
  			this._timer = setTimeout(() => {
  				this.isvisible = false;
  				this.update();
  			}, opts.bubble.delay || 1000);
  		};

  		this.toggleBubble = () => {
  			this.isvisible = !this.isvisible;
  		};
  });

  riot$1.tag2('rg-chart', '<canvas></canvas>', 'rg-chart,[data-is="rg-chart"]{ display: inline-block; width: 100%; }', '', function(opts) {
      Chart.defaults.global.responsive = true;

      this.on('mount', () => {
        drawChart();
      });

      this.on('loaded', c => {
        this.on('unmount', () => {
          c.destroy();
        });
      });

      const drawChart = () => {
        if (!opts.chart) return

        let ctx = this.root.querySelector('canvas').getContext('2d');
        let chart = new Chart(ctx);
        let c = null;
        switch (opts.chart.type) {
          case 'line':
            c = chart.Line(opts.chart.data, opts.chart.options);
            break;
          case 'radar':
            c = chart.Radar(opts.chart.data, opts.chart.options);
            break;
          case 'polar':
            c = chart.PolarArea(opts.chart.data, opts.chart.options);
            break;
          case 'pie':
            c = chart.Pie(opts.chart.data, opts.chart.options);
            break;
          case 'doughnut':
            c = chart.Doughnut(opts.chart.data, opts.chart.options);
            break;
          default:
            c = chart.Bar(opts.chart.data, opts.chart.options);
            break;
        }
        this.trigger('loaded', c);
      };

  });

  riot$1.tag2('rg-code', '<div class="editor"></div>', 'rg-code .editor,[data-is="rg-code"] .editor{ position: absolute; top: 0; right: 0; bottom: 0; left: 0; }', '', function(opts) {
  		if (!opts.editor) opts.editor = { code: '' };

  		let editor;

  		const setupEditor = () => {
  			editor.setTheme(`ace/theme/${opts.editor.theme || 'monokai'}`);
  			editor.getSession().setMode(`ace/mode/${opts.editor.mode || 'html'}`);
  			editor.getSession().setTabSize(opts.editor.tabsize || 2);
  			editor.getSession().setUseSoftTabs(opts.editor.softtabs);
  			editor.getSession().setUseWrapMode(opts.editor.wordwrap);
  			editor.setReadOnly(opts.editor.readonly);
  		};

  		this.on('update', () => {

  			if (!this.isMounted) { return }
  			setupEditor();
  			if (opts.editor.code != editor.getValue())
  				editor.setValue(opts.editor.code, 1);
  		});

  		this.on('mount', () => {
  			opts.editor.code = opts.editor.code || "";
  			this.editor = editor = ace.edit(this.root.querySelector('.editor'));
  			editor.$blockScrolling = Infinity;
  			if (opts.editor.url) {
  				const req = new XMLHttpRequest();
  				req.onload = resp => {
  					opts.editor.code = resp;
  					this.update();
  				};
  				req.open('get', opts.editor.url, true);
  				req.send();
  			}
  			editor.setValue(opts.editor.code, 1);

  			editor.getSession().on('change', e => {
  				opts.editor.code = editor.getValue();
  				this.trigger('onchange', editor.getValue());
  			});
  			this.update();
  		});

  });

  riot$1.tag2('rg-credit-card-number', '<input type="text" name="cardnumber" class="card-no {icon} {className}" oninput="{oninput}" placeholder="{opts.card.placeholder}">', 'rg-credit-card-number .card-no,[data-is="rg-credit-card-number"] .card-no{ padding-right: 60px; background-repeat: no-repeat; background-position: right center; background-size: 60px; } rg-credit-card-number .amex,[data-is="rg-credit-card-number"] .amex{ background-image: url(img/amex.png); } rg-credit-card-number .diners_club,[data-is="rg-credit-card-number"] .diners_club{ background-image: url(img/diners_club.png); } rg-credit-card-number .discover,[data-is="rg-credit-card-number"] .discover{ background-image: url(img/discover.png); } rg-credit-card-number .jcb,[data-is="rg-credit-card-number"] .jcb{ background-image: url(img/jcb.png); } rg-credit-card-number .mastercard,[data-is="rg-credit-card-number"] .mastercard{ background-image: url(img/mastercard.png); } rg-credit-card-number .visa,[data-is="rg-credit-card-number"] .visa{ background-image: url(img/visa.png); }', '', function(opts) {
  		this.mixin("CSSMixin");
  		this.on("mount",() => {
  			this.input = this.root.querySelector("input");
  			this.input.value = opts.card.cardnumber;
  			this.update();
  		});

  		this.oninput = () => {};

  		if (!opts.card) opts.card = { cardnumber: '' };

  		this.on("update", () => {

  			if (!this.isMounted) { return }
  			opts.card.cardnumber = this.input.value;
  			const res = validateCreditCard(opts.card.cardnumber);
  			opts.card.valid = res.valid;
  			this.icon = opts.card.valid ? res.card_type.name : '';
  			this.className = this.css.field[res.valid ? 'success' : 'default'];
  		});

  		function validateCreditCard(input) {
  			var card_type, card_types, get_card_type, is_valid_length, is_valid_luhn, normalize, validate, validate_number;
  			card_types = [
  				{
  					name: 'amex',
  					icon: 'images/amex.png',
  					pattern: /^3[47]/,
  					valid_length: [15]
  				}, {
  					name: 'diners_club',
  					icon: 'images/diners_club.png',
  					pattern: /^30[0-5]/,
  					valid_length: [14]
  				}, {
  					name: 'diners_club',
  					icon: 'images/diners_club.png',
  					pattern: /^36/,
  					valid_length: [14]
  				}, {
  					name: 'jcb',
  					icon: 'images/jcb.png',
  					pattern: /^35(2[89]|[3-8][0-9])/,
  					valid_length: [16]
  				}, {
  					name: 'laser',
  					pattern: /^(6304|670[69]|6771)/,
  					valid_length: [16, 17, 18, 19]
  				}, {
  					name: 'visa_electron',
  					pattern: /^(4026|417500|4508|4844|491(3|7))/,
  					valid_length: [16]
  				}, {
  					name: 'visa',
  					icon: 'images/visa.png',
  					pattern: /^4/,
  					valid_length: [16]
  				}, {
  					name: 'mastercard',
  					icon: 'images/mastercard.png',
  					pattern: /^5[1-5]/,
  					valid_length: [16]
  				}, {
  					name: 'maestro',
  					pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
  					valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
  				}, {
  					name: 'discover',
  					icon: 'images/discover.png',
  					pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
  					valid_length: [16]
  				}
  			];

  			var options = {
          accept: card_types.map(c => c.name)
        };

  			get_card_type = function (number) {
          return card_types.find(c => number.match(c.pattern)) || null
        };

  			is_valid_luhn = function (number) {
  				var digit, n, sum, _j, _len1, _ref1;
  				sum = 0;
  				_ref1 = number.split('').reverse();
  				for (n = _j = 0, _len1 = _ref1.length; _j < _len1; n = ++_j) {
  					digit = _ref1[n];
  					digit = +digit;
  					if (n % 2) {
  						digit *= 2;
  						if (digit < 10) {
  							sum += digit;
  						} else {
  							sum += digit - 9;
  						}
  					} else {
  						sum += digit;
  					}
  				}
  				return sum % 10 === 0;
  			};

  			is_valid_length = function (number, card_type) {
          return card_type.valid_length.indexOf(number.length) !== -1
  			};

  			validate_number = (function (_this) {
  				return function (number) {
  					var length_valid, luhn_valid;
  					card_type = get_card_type(number);
  					luhn_valid = false;
  					length_valid = false;
  					if (card_type != null) {
  						luhn_valid = is_valid_luhn(number);
  						length_valid = is_valid_length(number, card_type);
  					}
  					return {
  						card_type: card_type,
  						valid: luhn_valid && length_valid,
  						luhn_valid: luhn_valid,
  						length_valid: length_valid
  					};
  				};
  			})(this);

  			normalize = function (number) {
  				return number.replace(/[ -]/g, '');
  			};

  			validate = (function (_this) {
  				return function () {
  					return validate_number(normalize(input));
  				};
  			})(this);

  			return validate(input);
  		}

  });

  riot$1.tag2('rg-date', '<div class="container"> <input type="text" class="{css.field.default}" onclick="{open}" riot-value="{value}" readonly> <div class="calendar calendar--high" if="{isvisible}"> <button class="calendar__control" disabled="{opts.date.min.isSame(opts.date.date, \'year\')}" onclick="{prevYear}">‹</button> <div class="calendar__header">{opts.date.date.format(yearFormat)}</div> <button class="calendar__control" disabled="{opts.date.max.isSame(opts.date.date, \'year\')}" onclick="{nextYear}">›</button> <button class="calendar__control" disabled="{opts.date.min.isSame(opts.date.date, \'month\')}" onclick="{prevMonth}">‹</button> <div class="calendar__header">{opts.date.date.format(monthFormat)}</div> <button class="calendar__control" disabled="{opts.date.max.isSame(opts.date.date, \'month\')}" onclick="{nextMonth}">›</button> <div class="calendar__day">Mo</div> <div class="calendar__day">Tu</div> <div class="calendar__day">We</div> <div class="calendar__day">Th</div> <div class="calendar__day">Fr</div> <div class="calendar__day">Sa</div> <div class="calendar__day">Su</div> <button class="calendar__date {\'calendar__date--selected\': day.selected, \'calendar__date--today\': day.today}" disabled="{day.disabled}" each="{day in startBuffer}" onclick="{select}">{day.date.format(dayFormat)}</button> <button class="calendar__date calendar__date--in-month {\'calendar__date--selected\': day.selected, \'calendar__date--today\': day.today}" disabled="{day.disabled}" each="{day in days}" onclick="{select}">{day.date.format(dayFormat)}</button> <button class="calendar__date {\'calendar__date--selected\': day.selected, \'calendar__date--today\': day.today}" disabled="{day.disabled}" each="{day in endBuffer}" onclick="{select}">{day.date.format(dayFormat)}</button> <button class="button button--block button--primary" disabled="{opts.date.min.isAfter(moment(), \'day\') || opts.date.max.isBefore(moment(), \'day\')}" onclick="{setToday}">Today</button> </div> </div>', 'rg-date .container,[data-is="rg-date"] .container{ position: relative; display: inline-block; cursor: pointer; } rg-date .calendar,[data-is="rg-date"] .calendar{ position: absolute; min-width: 300px; margin-top: .5em; left: 0; z-index: 501; }', '', function(opts) {
  		this.mixin("CSSMixin");
  		const toMoment = d => {
  			if (!moment.isMoment(d)) d = moment(d);
  			if (d.isValid()) return d
  			return moment()
  		};

  		const handleClickOutside = e => {
  			if (!this.root.contains(e.target)) this.close();
  			this.update();
  		};

  		this.dayObj = dayDate => {
  			const dateObj = dayDate || moment();
  			return {
  				date: dateObj,
  				selected: opts.date.date.isSame(dayDate, 'day'),
  				today: moment().isSame(dayDate, 'day'),
  				disabled: (
  					opts.date.min && opts.date.min.isAfter(dayDate) ||
  					opts.date.max && opts.date.max.isBefore(dayDate)
  				)
  			}
  		};

  		const buildCalendar = () => {
  			this.format = 'LL';
  			this.yearFormat = 'YYYY';
  			this.monthFormat = 'MMMM';
  			this.dayFormat = 'DD';

  			this.days = [];
  			this.startBuffer = [];
  			this.endBuffer = [];

  			const begin = moment(opts.date.date).startOf('month');
  			const daysInMonth = moment(opts.date.date).daysInMonth();
  			const end = moment(opts.date.date).endOf('month');

  			for (let i = begin.isoWeekday() - 1; i > 0; i -= 1) {
  				const d = moment(begin).subtract(i, 'days');
  				this.startBuffer.push(this.dayObj(d));
  			}

  			for (let i = 0; i < daysInMonth; i++) {
  				const current = moment(begin).add(i, 'days');
  				this.days.push(this.dayObj(current));
  			}

  			for (let i = end.isoWeekday() + 1; i <= 7; i++) {
  				const d = moment(end).add(i - end.isoWeekday(), 'days');
  				this.endBuffer.push(this.dayObj(d));
  			}
  		};

  		this.on('mount', () => {
  			if (!opts.date) opts.date = { date: moment() };
  			if (!opts.date.date) opts.date.date = moment();
  			opts.date.date = toMoment(opts.date.date);

  			opts.date.min = toMoment(opts.date.min || -8.64e15);

  			if (opts.date.min.isAfter(opts.date.date, 'day')) {
  				opts.date.date = moment(opts.date.min);
  			}

  			opts.date.max = toMoment(opts.date.max || 8.64e15);

  			if (opts.date.max.isBefore(opts.date.date, 'day')) {
  				opts.date.date = moment(opts.date.max);
  			}

  			document.addEventListener('click', handleClickOutside);
  			this.update();
  		});

  		this.on('update', () => {

  			if (!this.isMounted) { return }
  			opts.date.date = toMoment(opts.date.date);
  			buildCalendar();
  			this.value = opts.date.date.format(this.format);
  		});

  		this.on('unmount', () => {
  			document.removeEventListener('click', handleClickOutside);
  		});

  		this.open = () => {
  			this.isvisible = true;
  			this.trigger('open');
  		};

  		this.close = () => {
  			if (this.isvisible) {
  				this.isvisible = false;
  				this.trigger('close');
  			}
  		};

  		this.select = e => {
  			opts.date.date = e.item.day.date;
  			this.trigger('select', opts.date.date);
  		};

  		this.setToday = () => {
  			opts.date.date = moment();
  			this.trigger('select', opts.date.date);
  		};

  		this.prevYear = () => {
  			opts.date.date = opts.date.date.subtract(1, 'year');
  		};

  		this.nextYear = () => {
  			opts.date.date = opts.date.date.add(1, 'year');
  		};

  		this.prevMonth = () => {
  			opts.date.date = opts.date.date.subtract(1, 'month');
  		};

  		this.nextMonth = () => {
  			opts.date.date = opts.date.date.add(1, 'month');
  		};

  });

  riot$1.tag2('rg-drawer', '<div class="overlay" if="{opts.drawer.isvisible}" onclick="{close}"></div> <div class="drawer {\'drawer--\' + opts.drawer.position || \'drawer--bottom\'} {\'drawer--visible\': opts.drawer.isvisible}"> <h4 class="heading heading--xsmall">{opts.drawer.header}</h4> <ul class="menu"> <li class="menu__item {\'menu__item--active\': active}" each="{opts.drawer.items}" onclick="{parent.select}"> {text} </li> </ul> <div class="drawer__body"> <yield></yield> </div> </div>', '', '', function(opts) {
  		if (!opts.drawer) opts.drawer = {};

  		this.close = () => {
  			opts.drawer.isvisible = false;
  			this.trigger('close');
  		};

  		this.select = e => {
  			opts.drawer.items.forEach(item => item.active = false);
  			e.item.active = true;
  			this.trigger('select', e.item);
  		};

  });

  riot$1.tag2('rg-ga', '', '', '', function(opts) {

  		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  				(i[r].q=i[r].q||[]).push(arguments);}, i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
  		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  		ga('create', opts.property, 'auto');
  		ga('send', 'pageview');
  });

  riot$1.tag2('rg-iframify', '<div class="iframify"> <div class="frame"> <yield></yield> </div> </div>', 'rg-iframify .iframify,[data-is="rg-iframify"] .iframify{ margin: 0; padding: 0; } rg-iframify iframe,[data-is="rg-iframify"] iframe{ position: relative; width: 100%; border: 0; }', '', function(opts) {
  		this.on('mount', () => {
  			iframify(this.root.querySelector('.frame'), this.opts);
  		});
  });

  riot$1.tag2('rg-include', '<div> {responseText} </div>', '', '', function(opts) {
  		const fetch = () => {
  			const req = new XMLHttpRequest();
  			req.onload = resp => {
  				if (opts.include.unsafe) this.root.innerHTML = req.responseText;
  				else this.responseText = req.responseText;
  				this.update();
  				this.trigger('loaded');
  			};
  			req.open('get', opts.include.url, true);
  			req.send();
  			this.trigger('loading');
  		};

  		this.on('mount', () => {
  			fetch();
  		});
  });

  riot$1.tag2('rg-map', '<div class="rg-map"></div>', 'rg-map .rg-map,[data-is="rg-map"] .rg-map{ margin: 0; padding: 0; width: 100%; height: 100%; } rg-map .rg-map img,[data-is="rg-map"] .rg-map img{ max-width: inherit; }', '', function(opts) {
  		window.rg = window.rg || {};
  		window.rg.gmap = riot$1.observable({
  			initialize: () => {
  				window.rg.gmap.trigger('initialize');
  			}
  		});

  		this.on('mount', () => {
  			if (!opts.map) opts.map = {
  				center: {
  					lat: 53.806,
  					lng: -1.535
  				},
  				zoom: 7
  			};

  			rg.gmap.on('initialize', () => {
  				opts.map.mapObj = new google.maps.Map(this.root.querySelector('.rg-map'), opts.map);
  				this.trigger('loaded', opts.map.mapObj);
  			});

  			if (!document.getElementById('gmap_script')) {
  				let script = document.createElement('script');
  				script.setAttribute('id', 'gmap_script');
  				script.type = 'text/javascript';
  				script.src = 'https://maps.googleapis.com/maps/api/js?callback=window.rg.gmap.initialize';
  				document.body.appendChild(script);
  			}
  		});

  });

  riot$1.tag2('rg-markdown', '', '', '', function(opts) {
  		this.on("mount", () => this.update());
  		this.reader = new commonmark.Parser();
  		this.writer = new commonmark.HtmlRenderer();

  		this.on('update', () => {
  			if (!opts.markdown) opts.markdown = {};
  			if (opts.markdown.content) {
  				this.root.innerHTML = this.writer.render(this.reader.parse(opts.markdown.content));
  			} else if (opts.markdown.url) {
  				const req = new XMLHttpRequest();
  				req.onload = resp => {
  					this.root.innerHTML = this.writer.render(this.reader.parse(req.responseText));
  					this.trigger('loaded');
  				};
  				req.open('get', opts.markdown.url, true);
  				req.send();
  				this.trigger('loading');
  			}
  		});

  });

  riot$1.tag2('rg-modal', '<div class="{css.mask}" if="{opts.modal.isvisible}" onclick="{close}"></div> <div class="{outer_style}" if="{opts.modal.isvisible}"> <div class="{css.modal.inner}"> <header class="{css.header}"> <button if="{opts.modal.dismissable}" type="button" class="{css.button.close}" onclick="{close}"> &times; </button> <h3 class="{css.header_title}">{opts.modal.heading}</h3> </header> <div class="{css.body}"> <yield></yield> </div> <footer class="{css.footer}"> <button each="{opts.modal.buttons}" type="button" class="{css.button[type]}" onclick="{action}" riot-style="{style}"> {text} </button> </footer> </div> </div>', 'rg-modal .modal--ghost .modal__footer,[data-is="rg-modal"] .modal--ghost .modal__footer{ display: block; } rg-modal .modal--ghost .modal__footer .button,[data-is="rg-modal"] .modal--ghost .modal__footer .button{ margin: 0 .5em 0 0; }', 'class="{css.root}"', function(opts) {
  		this.mixin("CSSMixin");
  		this.scopeCSS('modal');
  		this.on("mount", () => this.update());
  		if (!opts.modal) opts.modal = {};

  		this.close = () => {
  			if (opts.modal.dismissable) {
  				opts.modal.isvisible = false;
  				this.trigger('close');
  			}
  		};

  		this.on("update", () => {
  			this.outer_style = this.css[opts.modal.ghost? "ghost":"outer"];
  		});

  });

  riot$1.tag2('rg-pagination', '<div class="{css.outer}"> <div class="{css.controls.left}"> <button class="{css.item}" disabled="{opts.pagination.page <= 1}" onclick="{first}">«</button> <button class="{css.item}" disabled="{opts.pagination.page <= 1}" onclick="{back}">‹</button> </div> <div class="{css.controls.center}"> <span class="{css.ellipsis}" if="{opts.pagination.page > 2}">&hellip;</span> <button class="{css.page}" onclick="{back}" if="{opts.pagination.page > 1}">{opts.pagination.page - 1}</button> <button class="{css.active_page}">{opts.pagination.page}</button> <button class="{css.page}" onclick="{forward}" if="{opts.pagination.page < opts.pagination.pages}">{opts.pagination.page + 1}</button> <span class="{css.ellipsis}" if="{opts.pagination.page < opts.pagination.pages - 1}">&hellip;</span> </div> <div class="{css.controls.right}"> <button class="{css.item}" disabled="{opts.pagination.page >= opts.pagination.pages}" onclick="{forward}">›</button> <button class="{css.item}" disabled="{opts.pagination.page >= opts.pagination.pages}" onclick="{last}">»</button> </div> </div>', '', '', function(opts) {
      this.mixin("CSSMixin");
      this.scopeCSS('pagination');
      if (!opts.pagination) opts.pagination = {
        pages: 1,
        page: 1
      };

      this.on('page', () => {
        const btns = this.root.querySelectorAll('button');
        for (let i = 0; i < btns.length; i++) {
          btns[i].blur();
        }
      });

      this.forward = () => {
        opts.pagination.page++;
        this.trigger('page', opts.pagination.page);
      };

      this.back = () => {
        opts.pagination.page--;
        this.trigger('page', opts.pagination.page);
      };

      this.first = () => {
        opts.pagination.page = 1;
        this.trigger('page', opts.pagination.page);
      };

      this.last = () => {
        opts.pagination.page = opts.pagination.pages;
        this.trigger('page', opts.pagination.page);
      };

  });

  riot$1.tag2('rg-phone-sim', '<div class="emulator" if="{opts.phonesim && opts.phonesim.url}"> <iframe class="screen" riot-src="{opts.phonesim.url}"></iframe> </div>', 'rg-phone-sim .emulator,[data-is="rg-phone-sim"] .emulator{ position: relative; width: 365px; height: 792px; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW0AAAMYCAMAAAA3r0ZLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFMDk6+vr6KTM0lJucMz4/PklKJS8wLTg5Qk1OxsjILzo7gomJ2NvbdH5/ho2O9fb2KzY3ztHRPEdIOkVGZWxtjJSVOEJDkpeYWGRluL2+KTQ1vcHBoaWlPUZHcnp6nKKjOkRF1NfXqa2tp62tZnBxanV2VmFiZ29wVl1eaXJzbXR04uTktbq7QElK1tnZipKTi5CRTlZXpKioo6mqXmlqUVlaOEFCSVFSUFxdISssT1tcTlpbJC4vIiwtTVlaJjAxIy0uTFhZS1dYJzEyKDIzSlZXPUhJOURFO0ZHSVVWKzU2P0pLKjQ1OENEND0+QEtMLDY3SFRVN0JDQ05PLTc4ND9ANUBBQUxNNkFCR1NUMTo7RE9QLjg5N0BBR1JTRlJTLzk6RVFSMjs8RVBRRlFSNj9AMzw9SFNUMj0+IissMTs8MDo7SVRVRFBRMDs8MTw9IiwsMz0+Mjw9SlVWQ09QLjk6NT4/S1ZXND4/JC4uQU1OIy0tQk5PTFdYTVhZQExNTllaJS8vJzIyP0tMLzg5LDc4KDMzNT9AKjU1N0FCNkBBJjAwIywtMDs7Mj09NkFBJjExLjk5LDc3N0JCNUBAKjU2MTw8LDU2Ljc4OUNEKDEyQU1NPEhIPEhJO0dHOkZGND8/Qk5ORFBQQ09PLTY3OUREPkpKPkpLPUlJT1pbP0tLJTAwPUlKJzAxKjM07u/vKTIzsbW2YGprtLm50tXWPkhJo6endn+A3d/f6uvreoOEg4yN2tvc/Pz8n6am8/T0VFtcm6CgJS4v4OLi5ufnYGdncnt8dHp7gYaHJC0uu8DAjJGRQkxNxMfHKzQ1YGtsS1NUaXN0bnh5yMzMyszMy83Oy8/PdoCAKDIy7O3tT1dYuLu70NTUbXd46Onq6erreoCA2dzc8PHx8vPz5OXlnaSkn6Wmqq6ucHZ2t7y8o6eoeoSEkJaWm5+gW2ZnZG5vqa+wOEFB09bWtru7qrCwcXd4t7u83eDgzM7O7/DwNT4+7e7uwMPDwcPEeH5/////70wnUQAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAA+NSURBVHja7N13nBTlGcDxEQI5AmJQBAkcnqhEDIhoWMt5iogmQbOaYNrqYrJh16gplmTVkILJpYCmF+DSE1JIcjRR7L333ntPYjQxvTl55tnr7N7t7uw+vDP3+/0x3G3hs5+vr++8M7s7eH75Xb5x+rOjN017aeq+tO++U1+atmn0s9M3Xl6BoFfm466ZOPROhIt259CJ19RS++7LdgW133a97O7aaI/a+VE0y+jRnUeF1p6wqfvvaz6+YVjT0jMyJ3rkeSdmzljaNKzh+OZuoE0TQmmvv67zLzrwmMY8wkXLNx5zYCfTdeur1p6wdeegblgKar8tbegc4lv/rirtjTMLT99/UVMKzgFLNS3avwA2c2Pl2n8tPHV1QxLJMks2rC6g/alC7ScvKozrhhyIFZRrKIzvi56sRHt94b/RIsZ1xeN7UYFuffna4/UJB68Er4rGHax648vUfmqkPnxBBrmqyixQv5FPlaP9Dz2eWdIEW9U1LdFjnQsG1n5ETz4dyowdavY+VE9XPTKQ9phddPfICjvk6lt3lruM6V97j132l26BK3S3BJAv79Gf9jN3BY85HKsadHhAedebSmtf+ofgEcOQqknDAsyLLi2pPTq4/0icatSRAefoUto7Bvc2oFSzGgLQHYtr3xTct5DVSA1XJgsD0puKaa99s9wzlwPImh5WzhXTl/5TRHt7uaN5GUI1bVmzqL64ufZfgkF/GD417rCA9e99tf8VzCPHoVPzjhPXaVv10d5bblzCyZE6nDIJ5pKde2u/Egz487Cp1zHlHr20h8otp50ETT2WgaeL7dCe2vcF/uOQqUsrA9z7emgHQ3thdEZLLpeL0kHYwq7BrdqjAv2ofEAnlU0EZaPjvTTgHdWlvXeEhnYu0VkuUoN7707tbW6X35oiciyc6C4yZxmaxPf2bTq0z5VfTo/IC8/20M5GZnAHy5JzO7Tvj85bCKlEzyIzdQdvLNxf0L4wmMQjMgnmemlHZubOBcQXqvb0CO0jk720o3OmIdhPTlft4FTrth5ju55tK8bbq/YG+emUiLzqTC/t6Lz1cYoYbwi0r47QisTz0j2w0xE6ngxWJVeLdrD+WxCZVx3J9ba0QNeAnj9T/twuOi87GcF9pLSdKM8U7Q2rV6+O0jcQMoXJJB2t96tzorzB99Y2NzfPjdQL9zLJZDJynw2YK85rvZ1ku9Cjuq+4xXknb4Js+XxU/WsQ5wnec7LlDcn6d544P+ddLFu+zlT/Vorzxd5k2fIJqfq3TJwney/Lls+RGBwniPPL3g6y5aOWBstWcd7BmypbLjhS/1LiPNWTTTMWBik02mijTWijTWijjTbFVTuZTqSTRW8OUzqJdpGyxT89mU2ELYv25kO4+LvnyUT4kmj3LV38YzjpGmin3dReIm2pF9BlU+LmMDmnrdBbUntQje0trj2o5m2FPlBiTWKQQm9R7cG03nZAexCFNtpoE9poE9poo01oo01oo01oo4021VT7MxIUBik02mijTeG1D5agMEih0UYbbUIbbUIbbbQJbbQJbbQJbbTRplppf1qCwiCFRhtttCm89lwJCoMUGm200Sa00Sa00Uab0Eab0Eab0EY73tqnS1AYpNBoo402hdc+VILCIIVGG220CW20CW200Sa00Sa00aYC9GkSFAYpNNpoo01oR0v7bRIUBik02mijTWijTWijjTahjTah7bL2hyUoDFJotNFGm9BGm0ppv0OCwiCFRhtttAlttAlttNEmtOOhfbwEhUEKjTbaaBPaaBPaLmi/T4LCIIVGG220CW20CW200ab6aS+UoDBIodFGG21CG21C2wXt4yQoDFJotNFGm9BGm9BGe7BpL5KgMEih0UYbbUIbbULbBe0PSFAYpNBoo402oY02oY32YNP+oASFQQqNNtpoE9poE9poDzbtj0hQGKTQaKONNqGNNpXS/qkEhUEKfYwEhUEKjTbaaBPaaBPaaA827Y9LUBik0GijjTahHS3tn0lQGKTQCyQoDFJotNFGm9BGm9BGG22qn/anJCgMUmi00Uabwmv/RILCIIVukKAwSKHRRhttQhttQhtttKl+2p+UoDBIodFGG20Kr/09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\'); background-repeat: no-repeat; background-position: center; background-size: cover; } rg-phone-sim .screen,[data-is="rg-phone-sim"] .screen{ position: absolute; top: 105px; left: 22px; background-color: white; width: 320px; height: 568px; border: 0; }', '', function(opts) {
  });

  riot$1.tag2('rg-placeholdit', '<img riot-src="https://placeholdit.imgix.net/~text?bg={opts.placeholdit.background}&txtclr={opts.placeholdit.color}&txt={opts.placeholdit.text}&txtsize={opts.placeholdit.textsize}&w={opts.placeholdit.width}&h={opts.placeholdit.height}&fm={opts.placeholdit.format}">', '', '', function(opts) {
  		if (!opts.placeholdit) opts.placeholdit = {};
  		this.on("mount", () => this.update());

  		this.on('update', () => {
  			opts.placeholdit.width = opts.placeholdit.width || 450;
  			opts.placeholdit.height = opts.placeholdit.height || 250;
  			opts.placeholdit.background = opts.placeholdit.background || '000';
  			opts.placeholdit.color = opts.placeholdit.color || 'fff';
  			opts.placeholdit.text = opts.placeholdit.text || `${opts.placeholdit.width} x ${opts.placeholdit.height}`;
  			opts.placeholdit.textsize = opts.placeholdit.textsize || 30;
  			opts.placeholdit.format = opts.placeholdit.format || 'png';
  		});

  });

  riot$1.tag2('rg-raw', '<span></span>', '', '', function(opts) {
  		this.on('mount', () => this.update());
  		this.on('update', () => {
  			this.root.innerHTML = opts.content || '';
  		});
  });

  riot$1.tag2('rg-select', '<input type="{opts.select.filter ? \'search\' : \'text\'}" name="selectfield" class="{css.field.default}" placeholder="{opts.select.placeholder}" onkeydown="{keydown}" onfocus="{open}" readonly="{!opts.select.filter}"> <ul class="{css.menu.outer}" if="{isvisible}"> <li each="{options}" onclick="{parent.select}" class="{className}" disabled="{disabled}"> {text} </li> </ul>', 'rg-select .menu,[data-is="rg-select"] .menu{ position: absolute; }', '', function(opts) {
  		this.mixin("CSSMixin");
  		if (!opts.select) opts.select = { options: [] };

  		const handleClickOutside = e => {
  			if (!this.root.contains(e.target)) this.close();
  			this.update();
  		};

  		this.on('mount', () => {
  			document.addEventListener('click', handleClickOutside);
  			this.update();
  		});

  		this.on('unmount', () => {
  			document.removeEventListener('click', handleClickOutside);
  		});

  		this.keydown = e => {
  			const was_open = this.isvisible;
  			this.open();
  			if (e.keyCode === 38) {
  				this.navigate(-1);
  				e.preventDefault();
  			} else if (e.keyCode === 40) {
  				this.navigate(1);
  				e.preventDefault();
  			} else if (e.keyCode === 13) {
  				if (!was_open) {

  					return
  				}
  				const item = getActiveItem() || this.options[0];
  				item && this.select({ item });
  				this.close();
  				e.preventDefault();
  			} else {
  				this._navigate(0);
  			}
  		};

  		this.select = e => {
  			const value = e.item.text;
  			getInput().value = e.item.text;
  			this.trigger('select', e.item.text);
  			opts.onselect && opts.onselect(e.item, this);
  			opts.select.options.forEach(o => o.selected = false);
  			e.item.selected = true;
  			this.close();
  		};

  		this.navigate = dir => {
  			const { options } = this;
  			let new_index = (options.findIndex(o => o.active) + dir) % options.length;

  			if (new_index < 0) {
  				new_index = options.length - 1;
  			}
  			this._navigate(new_index);
  		};

  		this._navigate = index => {
  			opts.select.options.forEach(o => o.active = false);
  			const item = this.options[index || 0];
  			if (item) {
  				item.active = true;
  			}
  		};

  		this.on('update', () => {

  			if (!this.isMounted) { return }
  			const value = getValue();
  			this.options = opts.select.options;
  			if (opts.select.filter) {
  				if (value) {
  					const r = new RegExp(value,'i');
  					this.options = this.options.filter( o => o.text.match(r));
  					this.trigger('filter');
  				}
  			}
  			this.options.forEach(o => {
  				let state;
  				if (o.disabled) { state = "disabled"; }
  				else if (o.selected) { state = "selected"; }
  				o.className = this.css.menu[state];
  				if (o.active) { o.className += " " + this.css.menu.hover; }
  			});
  		});

  		const getValue = () => getInput().value;
  		const getInput = () => this.root.querySelector('input');
  		const getActiveItem = () => {
  			return this.options.find(o => o.active)
  		};

  		this.open = (e) => {
  			this.isvisible = true;
  			this.trigger('open');
  		};

  		this.close = (e) => {
  			this.isvisible = false;
  			this.trigger('close');
  		};

  });

  riot$1.tag2('rg-tabs', '<div class="{css.tab_outer}"> <div class="{css.tab_nav.outer}"> <div each="{tab in opts.tabs.tabs}" class="{css.tab_nav.match(tab)}" onclick="{parent.open}"> {tab.heading} </div> </div> <div each="{tab in opts.tabs.tabs}" class="{css.tab_content.match(tab)}"> {tab.text} <rg-raw if="{tab.raw}" content="{tab.raw}"></rg-raw> <div if="{include}"> {include.responseText} </div> </div> </div>', '', '', function(opts) {
  		if (!opts.tabs) opts.tabs = {};
  		this.mixin("CSSMixin");

  		this.on('mount', () => this.update());
  		const fetch = (tab) => {
  			if (tab.raw) { return }
  			const req = new XMLHttpRequest();
  			req.onload = resp => {
  				tab.raw = req.responseText;
  				tab.text = undefined;
  				this.update();
  				this.trigger('loaded', tab);
  			};
  			req.open('get', tab.include, true);
  			req.send();
  			this.trigger('loading', tab);
  		};

  		this.open = e => {
  			let tab = e.item.tab;
  			if (!tab.disabled && !tab.active) {
  				opts.tabs.tabs.forEach(tab => tab.active = false);
  				this.trigger('open', tab);
  				tab.active = true;
  			}
  		};

  		this.on('update', () => {
  			if (!Array.isArray(opts.tabs.tabs)) return
  			opts.tabs.tabs.forEach(tab => {
  				if (!tab.disabled && tab.active && tab.include) {
  					fetch(tab);
  				}
  			});
  		});

  });

  riot$1.tag2('rg-tags', '<div class="tags"> <span class="tags__container"> <div each="{opts.tags.tags}" onclick="{removeTag}" class="{css.badge.primary} {\'rg-pointer\': removeTag}"> {text} <span class="tag__close">×</span> </div> </span> <rg-select select="{select_opts}" onselect="{select}" class="tags__container"></rg-select> </div>', 'rg-tags .menu,[data-is="rg-tags"] .menu{ position: absolute; }', 'class="{opts.className}"', function(opts) {
  		this.mixin("CSSMixin");
  		this.on('mount', () => this.update());

  		if (!opts.tags) opts.tags = { options: [], tags: [] };
  		if (!opts.tags.options) opts.tags.options = [];
  		if (!opts.tags.tags) opts.tags.tags = [];
  		this.select_opts = Object.assign({ filter: true }, opts.tags);

  		this.select = (item, tag) => {
  			this.addTag(item);
  			this.trigger('select', item);
  			this.root.querySelector('input').value = '';
  			this.update();
  		};

  		this.addTag = item => {
  			if (opts.tags.tags.indexOf(item) == -1) {
  				opts.tags.tags.push(item);
  			}
  		};

  		this.removeTag = e => {
  			opts.tags.tags = opts.tags.tags.filter(tag => {
  				if (tag._id != e.item._id) return tag
  			});
  		};

  		this.on('update', () => {
  			opts.tags.options.forEach(item => {
  				item._id = item._id || (Math.floor(Math.random() * 60466175) + 1679615).toString(36);
  			});
  			opts.tags.tags.forEach(tag => {
  				tag._id = tag._id || (Math.floor(Math.random() * 60466175) + 1679615).toString(36);
  			});

  		});
  });

  riot$1.tag2('rg-toasts', '<div if="{opts.toasts.isvisible}" class="{css.toast_outer[opts.toasts.position]}"> <div each="{opts.toasts.toasts}" class="{css.toast[type]}" if="{isvisible}" onclick="{parent.toastClicked}"> <div class="toast-header"> {text} </div> </div> </div>', '', '', function(opts) {
  		this.mixin("CSSMixin");
  		opts.toasts = opts.toasts || {};
  		if (!Array.isArray(opts.toasts.toasts)) opts.toasts.toasts = [];
  		this.on("mount", () => this.update());

  		this.toastClicked = e => {
  			let toast = e.item;
  			window.clearTimeout(toast.timer);
  			toast.isvisible = false;
  			this.trigger('select', toast);
  		};

  		let _uid = 1;
  		const uid = () => _uid++;

  		this.on('update', () => {
  			opts.toasts.position = opts.toasts.position || 'bottomright';
  			opts.toasts.toasts.forEach(toast => {
  				toast.type = toast.type || 'primary';
  				if (typeof toast.isvisible == 'undefined') toast.isvisible = true;
  				toast.id = toast.id || uid();
  				if (!toast.timer && !toast.sticky) {
  					toast.startTimer = () => {
  						toast.timer = window.setTimeout(() => {
  							toast.isvisible = false;
  							this.trigger('close', toast);
  							this.update();
  						}, toast.timeout || 6000);
  					};
  					toast.startTimer();
  				}
  			});
  			opts.toasts.isvisible = opts.toasts.toasts.filter(toast => toast.isvisible).length > 0;
  		});

  });

  riot$1.tag2('rg-toggle', '<div class="{css.outer}"> <label class="{css.wrapper}"> <input type="checkbox" checked="{opts.toggle.checked}" onclick="{toggle}"> <div class="{css.track}"> <div class="{css.handle}"></div> </div> <yield></yield> </label> </div>', '', '', function(opts) {
  		this.mixin("CSSMixin");
  		this.scopeCSS("switch");
  		opts.toggle = opts.toggle || {};

  		this.toggle = () => {
  			opts.toggle.checked = !opts.toggle.checked;
  			this.trigger('toggle', opts.toggle.checked);
  		};

  });

  riot$1.tag2('rg-unsplash', '<img if="{path}" riot-src="https://unsplash.it/{path}/?{options}">', '', '', function(opts) {
  		this.on("mount", () => this.update());

  		this.on('update', () => {
  			if (!opts.unsplash) opts.unsplash = {};
  			const { greyscale, width, height } = opts.unsplash;
  			this.path = `${greyscale ? 'g/' : ''}${width|| 450}/${height || 250}`;
  			this.options = '';
  			if (opts.unsplash.random) this.options += 'random&';
  			if (opts.unsplash.blur) this.options += 'blur&';
  			if (opts.unsplash.image) this.options += 'image=' + opts.unsplash.image + '&';
  			if (typeof opts.unsplash.gravity !== 'undefined') this.options += 'gravity=' + opts.unsplash.gravity;
  		});
  });

})));
