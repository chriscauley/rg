<rg-docs>
  <div class="TODO hero"></div>
  <div class="container p-4">
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
  "bubble",
  "modal",
  "select",
  "select+filter",
  "tabs",
  "toasts",
  "tags",
]
this.tagName = "docs-" + opts.tagName.replace(/[^\-\w]+/g,"-")
this.on("mount", () => this.update())
</script>
</rg-docs>