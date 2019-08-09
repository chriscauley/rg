<rg-docs>
  <div class="container">
    <div class="row">
      <rg-menu items={menu_items} class="col-sm-3 d-block">
        <h4>Components</h4>
      </rg-menu>
      <div data-is={tagName} class="col"></div>
    </div>
  </div>

<script>
this.menu_items = [
  "alerts",
  "TODO bubble",
  "TODO modal",
  "TODO select",
  "TODO select+filter",
  "TODO tabs",
  "TODO toasts",
  "tags",
]
this.tagName = "docs-" + opts.tagName
this.on("mount", () => this.update())
</script>
</rg-docs>