<docs-bubble>
  <div class={css.grid.outer}>
    <div each={bubble_opts in bubbles} class={css.grid.w50}>
      <div class={css.card.outer}>
        <div class={css.card.inner}>
          <rg-bubble bubble={bubble_opts}>Hover over me</rg-bubble>
        </div>
      </div>
    </div>
  </div>
  <script>
    this.mixin('CSSMixin')
    const directions = ['top', 'bottom', 'left', 'right']
    this.bubbles = directions.map(direction => ({
      text: `Bubble goes ${direction}!`,
      direction,
      delay: 1000,
    }))
  </script>
</docs-bubble>