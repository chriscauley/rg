riot.tag2('rg-modal', '<div class="{css.mask}" if="{opts.modal.isvisible}" onclick="{close}"></div> <div class="{outer_style}" if="{opts.modal.isvisible}"> <header class="{css.header}"> <button if="{opts.modal.dismissable}" type="button" class="{css.button.close}" onclick="{close}"> &times; </button> <h3 class="{css.header_title}">{opts.modal.heading}</h3> </header> <div class="{css.body}"> <yield></yield> </div> <footer class="{css.footer}"> <button each="{opts.modal.buttons}" type="button" class="{css.button[type]}" onclick="{action}" riot-style="{style}"> {text} </button> </footer> </div>', 'rg-modal .modal--ghost .modal__footer,[data-is="rg-modal"] .modal--ghost .modal__footer{ display: block; } rg-modal .modal--ghost .modal__footer .button,[data-is="rg-modal"] .modal--ghost .modal__footer .button{ margin: 0 .5em 0 0; }', 'class="{css.root}"', function(opts) {
this.mixin(CSSMixin);
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
  this.outer_style = this.css[opts.modal.ghost ? "ghost" : "outer"];
});
});
