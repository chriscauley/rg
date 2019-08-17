<rg-badge>
  <span class={css.match(props)} onclick={clicked}>
    {props.text}
    <yield />
  </span>
  <script>
    this.css.match = (item) => {
      // #! TODO this will be a defined on the css library
      const { style, rounded, ghost } = item
      let out = `c-badge c-badge--${style}`
      if (rounded) out += " c-badge--rounded"
      if (ghost) out += " c-badge-ghost"
      return out
    }
    this.clicked = function(e) {
      self.trigger("badge-clicked", self.props);
    }
  </script>
</rg-badge>