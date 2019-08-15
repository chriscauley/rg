riot.tag2('rg-accordion', '<div class="c-card c-card--accordion" each="{item, index in panels}"> <input type="checkbox" id="accordion-{index}" onclick="{notify}"> <label class="c-card__item" for="accordion-{index}">{item.title}</label> <div class="c-accordion-content c-card__item"> <rg-markdown content="{item.content}"></rg-markdown> </div> </div>', 'rg-accordion .c-accordion-content,[data-is="rg-accordion"] .c-accordion-content{ display: none; } rg-accordion .c-card--accordion > [type=checkbox],[data-is="rg-accordion"] .c-card--accordion > [type=checkbox]{ display: none; } rg-accordion [type=checkbox]:checked ~ .c-accordion-content,[data-is="rg-accordion"] [type=checkbox]:checked ~ .c-accordion-content{ display: block; }', '', function(opts) {
this.notify = e => {
  not = {
    index: e.item.index,
    title: e.item.item.title,
    open: e.target.checked
  };
  this.trigger("notify", not);
};

this.on("mount", () => this.update());
this.on("update", () => {
  opts.accordions = opts.accordions || {};
  this.panels = opts.panels || opts.accordions.panels || [];
});
});