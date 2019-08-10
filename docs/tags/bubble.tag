<docs-bubble>
  <div class="row">
    <div each="{bubble_opts in bubbles}" class="{css.grid.half}">
      <div class="{css.card.outer}">
        <div class="{css.card.inner}">
          <rg-bubble bubble={bubble_opts}>Hove over me</rg-bubble>
        </div>
      </div>
    </div>
  </div>
  <script>
    this.mixin(CSSMixin)
    const directions = ['top', 'bottom', 'left', 'right']
    this.bubbles = directions.map(direction => ({
      text: `Bubble goes ${direction}!`,
      direction,
      delay: 2000,
    }))
  </script>
</docs-bubble>