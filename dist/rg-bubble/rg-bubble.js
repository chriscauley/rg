riot.tag2('rg-bubble', '<div class="{css[opts.bubble.direction]}" if="{isvisible}" style="min-width: 100%"> <div class="{css.arrow}"></div> <div class="{css.inner}">{opts.bubble.text}</div> </div> <div class="content" onmouseover="{showBubble}" onmouseout="{hideBubble}" onclick="{toggleBubble}"> <yield></yield> </div>', 'rg-bubble,rg-bubble [data-is="rg-bubble"],[data-is="rg-bubble"] [data-is="rg-bubble"]{ display: inline-block; position: relative; }', 'class="{css.outer}"', function(opts) {
this.mixin("CSSMixin");
this.scopeCSS("tooltip");

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
