riot.mixin('3to4', {
  init() {
    const setProps = () => {
      this.props = Object.assign(
        {},
        this.default_props,
        this.opts,
        this.opts.props,
        this.__prop_name && this.opts[this.__prop_name]
      )
    }

    this.$ = q => this.querySelector(q)
    this.$$ = q => this.querySelectorAll(q)

    setProps()
    this.on("update", setProps)
    this.on("mount", () => this.update())
  },
})
