<rg-menu>
  <div class={css.h4} if={opts.title}>{opts.title}</div>
  <div class={css.vertical}>
    <a href={item.href} class={css.link} each={item in opts.items}
       onclick={item.onclick}>
      { item.text }
      <span if={item.badge} class={css.badge.primary}>{item.badge}</span>
    </a>
  </div>
<script>
this.mixin('CSSMixin')
this.scopeCSS("nav")
</script>
</rg-menu>