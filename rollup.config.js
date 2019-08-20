import riot  from 'rollup-plugin-riot'
const options = {
  include: "tags/**/*tag",
}
export default {
  input: 'all.js',
  output: {
    file: 'dist/rg.js',
    format: "umd",
    name: "rg",
    globals: { riot: 'riot' },
  },
  plugins: [riot(options)],
  external: ['riot']
}