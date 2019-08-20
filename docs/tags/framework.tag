import CSSMixin from '../../css'

<docs-framework>
  <span>Currently Using: {name}</span>
<script>
  this.mixin("CSSMixin")
  this.on("mount", () => {
    if (this.css._name !== opts.name) {
      window.__selectFramework(opts.name) // reloads windows
    }
    const name = this.css._name
    this.name = name.slice(0,1).toUpperCase()+name.slice(1)
    this.update()
  })
</script>
</docs-framework>
