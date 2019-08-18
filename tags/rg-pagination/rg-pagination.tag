<rg-pagination>

  <div class="{css.outer}">
    <div class="{ css.controls.left }">
      <button class="{ css.item }" disabled="{ opts.pagination.page <= 1 }" onclick="{ first }">«</button>
      <button class="{ css.item }" disabled="{ opts.pagination.page <= 1 }" onclick="{ back }">‹</button>
    </div>
    <div class="{css.controls.center}">
      <span class="{ css.ellipsis }" if="{ opts.pagination.page > 2 }">&hellip;</span>
      <button class="{ css.page }" onclick="{ back }" if="{ opts.pagination.page > 1 }">{ opts.pagination.page - 1 }</button>
      <button class="{ css.active_page }">{ opts.pagination.page }</button>
      <button class="{ css.page }" onclick="{ forward }" if="{ opts.pagination.page < opts.pagination.pages }">{ opts.pagination.page + 1 }</button>
      <span class="{ css.ellipsis}" if="{ opts.pagination.page < opts.pagination.pages - 1 }">&hellip;</span>
    </div>
    <div class="{css.controls.right}">
      <button class="{ css.item }" disabled="{ opts.pagination.page >= opts.pagination.pages }" onclick="{ forward }">›</button>
      <button class="{ css.item }" disabled="{ opts.pagination.page >= opts.pagination.pages }" onclick="{ last }">»</button>
    </div>
  </div>

  <script>
    this.mixin("CSSMixin")
    this.scopeCSS('pagination')
    if (!opts.pagination) opts.pagination = {
      pages: 1,
      page: 1
    }

    this.on('page', () => {
      const btns = this.root.querySelectorAll('button')
      for (let i = 0; i < btns.length; i++) {
        btns[i].blur()
      }
    })

    this.forward = () => {
      opts.pagination.page++
      this.trigger('page', opts.pagination.page)
    }

    this.back = () => {
      opts.pagination.page--
      this.trigger('page', opts.pagination.page)
    }

    this.first = () => {
      opts.pagination.page = 1
      this.trigger('page', opts.pagination.page)
    }

    this.last = () => {
      opts.pagination.page = opts.pagination.pages
      this.trigger('page', opts.pagination.page)
    }

  </script>

</rg-pagination>
