<docs-modal>
  <button onclick={openModal} class={css.button.primary}>Open Modal</button>

  <script>
    this.mixin("CSSMixin")
    openModal() {
      const tag = document.createElement('rg-modal')
      tag.innerHTML = "Content goes here."
      document.body.appendChild(tag)
      riot.mount(tag, {
        modal: {
          isvisible: true,
          heading: "Modal Heading",
          buttons: [
            {
              text: 'OK',
              type: 'primary',
              action: function() {
                this.parent.unmount()
              }
            }
          ]
        }
      })
    }
  </script>
</docs-modal>