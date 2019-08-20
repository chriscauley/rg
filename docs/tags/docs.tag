<rg-docs class={css.container}>
  <div class="TODO hero"></div>
  <div class={css.outer}>
    <div class={css.w33}>
      <rg-menu items={component_items}>
        <h4>Riot Components</h4>
      </rg-menu>
      <rg-menu items={framework_items}>
        <h4>CSS Frameworks</h4>
      </rg-menu>
    </div>
    <div data-is={tagName} class={css.w66} name={opts.name}></div>
  </div>

<script>
this.mixin("CSSMixin")
this.css.use(window.SELECTED_FRAMEWORK)
this.scopeCSS("grid")
const components = [
  "alerts",
  "bubble",
  "modal",
  "select",
  "select+filter",
  "tabs",
  "toasts",
  "tags",
]

this.component_items = components.map( name => ({
  href: `#/component/${name}/`,
  text: `<rg-${name}>`,
}))

const frameworks = [
  'bootstrap',
  'blazeui',
  'blazecss',
]

this.framework_items = frameworks.map( name => ({
  text: name,
  href: `#/framework/${name}/`,
}))

this.tagName = "docs-" + opts.tagName.replace(/[^\-\w]+/g,"-")
this.on("mount", () => this.update())
</script>
</rg-docs>