<docs-tabs>
  <rg-tabs tabs={tab_opts}></rg-tabs>

  <script>
  this.tab_opts = {
    tabs: [{
      heading: 'Tab one',
      text: 'This is tab one'
    }, {
      heading: 'Tab two',
      text: 'This is tab two',
        active: true
    }, {
      heading: 'Disabled tab',
      disabled: true
    }, {
      heading: 'Tab three',
      include: 'yay.html'
    }]
  }
  </script>
</docs-tabs>