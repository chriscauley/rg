<rg-menu>
  <yield />
  <div class={css.vertical}>
    <a href={item.href} class={css.link} each={item in opts.items}
       onclick={item.onclick}>
      { item.text }
    </li>
  </ul>
<script>
this.mixin('CSSMixin')
this.scopeCSS("nav")
</script>
</rg-menu>