describe('rg-badge', function() {
  let tag
  afterEach(() => tag.unmount())

  it("mounts with no opts", () => {
    tag = newTag("rg-badge")
    tag.isMounted.should.be.true
  })

  it("shows text", () => {
    tag = newTag("rg-badge",{ text: "woo!" })
    tag.root.innerText.should.contain("woo!")
  })

  it("can have optional classes", () => {
    tag = newTag("rg-badge",{ ghost: true, rounded: true })
    tag.$$(".badge--rounded").length.should.equal(1)
    tag.$$(".badge--ghost").length.should.equal(1)
  })

  it("triggers onclick", () => {
    tag = newTag("rg-badge",{ text: "woo!" })
    const validate = mySpy(tag,["badge-clicked"])
    tag.$('span').click()
    validate({"badge-clicked": 1})
  })
})