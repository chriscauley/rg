<docs-drawer>
  <div class="drawer-container">
    <rg-drawer drawer={drawer}></rg-drawer>
  </div>
<script>
  this.drawer = {
    header: 'Drawer',
    isvisible: true,
    position: 'top',
    onselect: function (item) {
      alert(JSON.stringify(item))
    },
    items: [{
      id: 1,
      text: 'Item 1'
    }, {
      id: 2,
      text: 'Item 2 (has onclick)',
      onclick: item => alert(`clicked: ${item.text}`)
    }, {
      id: 3,
      text: 'Go To # (has href)',
      href: "#",
    }],
  }
</script>
<style scoped>
  .drawer-container {
    position: relative;
    height: 300px;
  }
</style>
</docs-drawer>
