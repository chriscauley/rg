describe('rg-breadcrumbs', function() {
  let tag
  const base_opts = {
    breadcrumbs: {
      links: [
        {
          text: "Home Star",
          url: "#",
        },
        {
          text: "Mercury",
          url: "#",
        },
        {
          text: "Venus",
          url: "#",
          badge: {
            text: "42",
            style: "primary",
            ghost: true,
          }
        },
        {
          text: "Third Rock",
          istext: true,
        }
      ]
    }
  }

  it("has the right children", () => {
    let tag = newTag("rg-breadcrumbs", base_opts)
    tag.isMounted.should.be.true
    tag.$$("li").length.should.equal(4)
    tag.$$(".badge").length.should.equal(1)
    tag.$$('[href]').length.should.equal(3)
  })

  it("triggers the triggers", () => {
    let tag = newTag("rg-breadcrumbs", base_opts)
    const validate = mySpy(tag,['link-clicked'])
    tag.$('a').click()
    validate({"link-clicked":1})
  })

  it("mounts without opts", () => {
    let tag = newTag("rg-breadcrumbs")
  })
})