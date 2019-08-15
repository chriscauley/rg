// since the accordion tag uses mostly css it's going to be pretty light on tests
describe('rg-accordion', function () {
  let tag
  const opts = {
    panels: [
      {
        title: 'Heading 1',
        content: '# Content 1 - _testing italics_'
      },
      {
        title: 'Heading 2',
        content: '## Content 2 some **bold proof**'
      },
      {
        title: 'Heading 3',
        content: '### Content 3'
      },
    ]
  }
  afterEach(() => tag.unmount())

  it("renders some markdown", () => {
    tag = newTag('rg-accordion', opts)
    expect(tag.$("rg-markdown h1")).to.exist
  })

  it("triggers notify", () => {
    tag = newTag('rg-accordion', opts)
    const spy = sinon.spy()
    tag.on("notify",spy)
    tag.$("label").click()
    spy.should.have.been.called
  })

  it("works with empty opts.accordions", () => {
    tag = newTag('rg-accordion', {})
  })

  it("works with no opts", () => {
    tag = newTag('rg-accordion', {})
  })
})