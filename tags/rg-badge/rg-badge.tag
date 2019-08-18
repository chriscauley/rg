<rg-badge>
  <span class={css.match(props)} onclick={clicked}>
    {props.text}
    <yield />
  </span>
  <script>
    this.mixin('3to4')
    this.css = {
      match: (item) => {
        // #! TODO this will be a defined on the css library
        const { style, rounded, ghost } = item
        let out = `badge badge--${style}`
        if (rounded) out += " badge--rounded"
        if (ghost) out += " badge--ghost"
        return out
      }
    }
    this.clicked = (e) => {
      this.trigger("badge-clicked", this.props);
    }
  </script>
</rg-badge>