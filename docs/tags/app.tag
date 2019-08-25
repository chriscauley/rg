<docs-app class={css.container}>
  <div class="TODO hero"></div>
  <div class={css.outer}>
    <div class={css.w33}>
      <rg-menu items={component_items} title="Riot Components">
      </rg-menu>
      <rg-menu items={framework_items} title="CSS Frameworks">
      </rg-menu>
    </div>
    <div class={css.w66}>
      <div data-is={tagName} name={opts.name}></div>
      <docs-code name={opts.tagName}></docs-code>
    </div>
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
  //'blazeui',
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