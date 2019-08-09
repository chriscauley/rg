<rg-menu>
  <yield />
  <div class={css.vertical}>
    <a href="#/component/{item}" class={css.link} each={item in opts.items}>
      { item }
    </li>
  </ul>
<script>
this.mixin(CSSMixin)
this.scopeCSS("nav")
</script>
</rg-menu>