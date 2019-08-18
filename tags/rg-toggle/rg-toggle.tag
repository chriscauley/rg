<rg-toggle>

	<div class="{ css.outer }">
		<label class="{css.wrapper}">
			<input type="checkbox" checked="{ opts.toggle.checked }" onclick="{ toggle }">
			<div class="{ css.track }">
				<div class="{ css.handle }"></div>
			</div>
			<yield />
		</label>
	</div>

	<script>
		this.mixin("CSSMixin")
		this.scopeCSS("switch")
		opts.toggle = opts.toggle || {}


		this.toggle = () => {
			opts.toggle.checked = !opts.toggle.checked
			this.trigger('toggle', opts.toggle.checked)
		}

	</script>

</rg-toggle>
