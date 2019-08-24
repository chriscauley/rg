<docs-app class={css.container}>
  <div class="TODO hero"></div>
  <div class={css.outer}>
    <div class={css.w33}>
      <rg-menu items={component_items}>
        <div class={css.h4}>Riot Components</div>
      </rg-menu>
      <rg-menu items={framework_items}>
        <div class={css.h4}>CSS Frameworks</div>
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
  "pagination",
  "select",
  "select+filter",
  "tabs",
  "tags",
  "toasts",
  "toggle",
]

this.component_items = components.map( name => ({
  href: `#/component/${name}/`,
  text: `<rg-${name}>`,
}))

const frameworks = [
  'bootstrap',
  'blazeui',
  'blazecss',
  'tailwind',
]

this.framework_items = frameworks.map( name => ({
  text: name,
  href: `#/framework/${name}/`,
}))

this.tagName = "docs-" + opts.tagName.replace(/[^\-\w]+/g,"-")
this.on("mount", () => this.update())
</script>
</docs-app>