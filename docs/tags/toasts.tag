<docs-toasts>
  <rg-toasts toasts={toasts}></rg-toasts>

  <script>
    this.toasts = {
      position: 'bottomleft',
      toasts: [{
        text: 'Auto disappear',
        timeout: 500
      }, {
        text: 'Auto disappear call onclose',
      }, {
        text: 'Sticky toast',
        sticky: true
      }]
    }
  </script>
</docs-toasts>