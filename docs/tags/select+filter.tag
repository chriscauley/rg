<docs-select-filter>
  <rg-select select={select} />

  <script>
    this.select = {
      placeholder: 'Please select a card',
      filter: true,
      options: [{
        id: 0,
        text: 'Visa'
      }, {
        id: 1,
        text: 'MasterCard',
        selected: true
      }, {
        id: 2,
        text: 'American Express'
      }, {
        id: 4,
        text: 'Disabled Card',
        disabled: true,
      }, {
        id: 3,
        text: 'Discover',
      }]
    }
  </script>
</docs-select-filter>