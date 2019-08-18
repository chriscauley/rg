<rg-breadcrumbs>
  <ol class="breadcrumbs">
    <li class="breadcrumbs__crumb { 'text--loud': !link.url}" each="{link in props.links}">
      <a class={link: link.url} href={link.url} onclick={linkclicked}>{link.text}</a>
      <rg-badge props={link.badge} if={link.badge}></rg-badge>
    </li>
    <yield />
  </ol>
<script>
  this.mixin('3to4')
  this.__prop_name = "breadcrumbs"
  this.linkclicked = (e) => {
    this.trigger("link-clicked", e.item.link);
  }
</script>
</rg-breadcrumbs>
