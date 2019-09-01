<docs-app>
  <div class="page-strip"></div>
  <div class={css.container}>
    <div class="docs-hero">
      <div if={big_hero}>
        <a href="/"><img src="/static/logobig.png" /></a>
      </div>
      <div if={!big_hero}>
        <a href="/"><img src="/static/logobig.png" width="50" /></a>
      </div>
    </div>
    <div class={css.outer}>
      <div class={css.w33}>
        <rg-menu items={framework_items} title="CSS Frameworks">
        </rg-menu>
        <rg-menu items={component_items} title="Riot Components">
        </rg-menu>
      </div>
      <div class={css.w66}>
        <div data-is={tagName} name={opts.name}></div>
        <docs-code name={opts.tagName} if={show_code}></docs-code>
      </div>
    </div>
  </div>

<script>
this.mixin("CSSMixin")
this.css.use(window.SELECTED_FRAMEWORK)
this.scopeCSS("grid")
const components = [
  "alerts",
  "bubble",
  "drawer",
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

this.framework_items = frameworks.map( name => {
  return {
    text: name,
    onclick: () => window.__selectFramework(name),
    badge: this.css._name === name ? "current": undefined,
  }
})

this.on("update", () => {
  this.tagName = "docs-" + opts.tagName.replace(/[^\-\w]+/g,"-")
  if (opts.tagName === "home") {
    this.big_hero = true
    this.show_code = false
  } else {
    this.show_code = true
  }
})
this.on("mount", () => this.update())
</script>
</docs-app>