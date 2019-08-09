<docs-alerts>
  <rg-alerts alerts={alerts} />
<script>
let type = "danger"
let dismissable
this.on("mount", () => this.update())

const TYPES = CSSMixin.variants.alert

const click_counts = {}
const alert_opts = {}
const values = {
  type: TYPES,
  dismissable: [undefined, true, false],
  text: [
    'Click me.',
    'This is the value of alert_opts.text KEEP CLICKING!',
    'Clicking an alert cycles their attribute',
  ]
}

Object.keys(values).forEach(value => {
  alert_opts[value] = values[value][0]
  click_counts[value] = 0
})

const cycle = (name) => {
  const _values = values[name]
  click_counts[name] ++
  const current_index = click_counts[name] % _values.length
  alert_opts[name] = _values[current_index]
  riot.update()
}

const newAlert = (prop_name) => ({
  ...alert_opts,
  text: `alert_opts.${prop_name} = ${alert_opts[prop_name]}`,
  ...opts,
  select: () => cycle(prop_name),
})

this.on("update", () => {
  this.alerts = [
    newAlert('text'),
    newAlert('type'),
    newAlert('dismissable'),
  ]
})
</script>
</docs-alerts>