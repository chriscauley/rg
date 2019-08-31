describe('rg-drawer', function () {
	let tag, drawer
	const default_opts = {
		drawer: {
		  header: 'Side Menu',
		  isvisible: true,
		  items: [{
			  text: 'Item 1'
		  }, {
			  text: 'Item 2'
		  }]
	  }
  }

	afterEach(function () {
		tag.unmount()
	})

	it('is mounted', function () {
		tag = newTag("rg-drawer", default_opts)
		tag.isMounted.should.be.true
		const tag2 = newTag("rg-drawer")
		tag2.isMounted.should.be.true
		tag2.unmount()
	})

	it('has an overlay', function () {
		tag = newTag("rg-drawer", default_opts)
		tag.$$('.overlay').length.should.equal(1)
		tag.$$('.drawer.drawer--visible').length.should.equal(1)
	})

	it('header is set correctly', function () {
		tag = newTag("rg-drawer", default_opts)
		$('rg-drawer .heading').text().should.contain('Side Menu')
	})

	it('has items', function () {
		tag = newTag("rg-drawer", default_opts)
		$('rg-drawer .menu__item').length.should.equal(2)
		$('rg-drawer .menu__item:nth-child(1)').text().should.contain('Item 1')
		$('rg-drawer .menu__item:nth-child(2)').text().should.contain('Item 2')
	})

	it('clicking an item activates it', function () {
		tag = newTag("rg-drawer", default_opts)
		$('rg-drawer .menu__item:nth-child(1)').is('.menu__item--active').should.be.false
		$('rg-drawer .menu__item:nth-child(2)').is('.menu__item--active').should.be.false
		$('rg-drawer .menu__item:nth-child(1)').click()
		$('rg-drawer .menu__item:nth-child(1)').is('.menu__item--active').should.be.true
		$('rg-drawer .menu__item:nth-child(2)').is('.menu__item--active').should.be.false
		$('rg-drawer .menu__item:nth-child(2)').click()
		$('rg-drawer .menu__item:nth-child(1)').is('.menu__item--active').should.be.false
		$('rg-drawer .menu__item:nth-child(2)').is('.menu__item--active').should.be.true
	})

	it('clicking overlay closes draw', function () {
		tag = newTag("rg-drawer", default_opts)
		$('rg-drawer .overlay').click()
		$('rg-drawer .overlay').length.should.equal(0)
		$('rg-drawer .drawer').is('.drawer--visible').should.be.false
	})
})
