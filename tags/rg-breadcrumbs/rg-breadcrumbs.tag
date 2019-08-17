<rg-breadcrumbs>
  <ol class="c-breadcrumbs">
      <li class="c-breadcrumbs__crumb { 'c-text--loud': !link.url}" each="{link in props.links}">
        <a class="c-link" href="{link.url}" onclick="{linkclicked}">{link.text}</a>
        <rg-badge props={link.badge} if="{link.badge}"></rg-badge>
      </li>
    </virtual>
    <yield />
  </ol>
<script>
  this.linkclicked = function(e) {
    this.trigger("link-clicked", e.item.link);
  }

  this.on("before-mount", function() {
    if (!this.opts.breadcrumbs) this.opts.breadcrumbs = {links: []};
    updateOpts();
  });

  this.on("badge-clicked", function (bc) {
    this.trigger("badge-clicked", bc)
  })
</script>
</rg-breadcrumbs>
