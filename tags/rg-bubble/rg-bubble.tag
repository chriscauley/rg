<rg-bubble>

	<div class="context" if="{ isvisible }">
		<div class="{css.tooltip[opts.direction]}">
			{ opts.bubble.text }
		</div>
		<div class="content" onmouseover="{ showBubble }" onmouseout="{ hideBubble }" onclick="{ toggleBubble }">
			<yield/>
		</div>
	</div>

	<script>
		this.mixin(CSSMixin)
		this.showBubble = () => {
			clearTimeout(this._timer)
			this.isvisible = true
		}

		this.hideBubble = () => {
			this._timer = setTimeout(() => {
				this.isvisible = false
				this.update()
			}, 1000)
		}

		this.toggleBubble = () => {
			this.isvisible = !this.isvisible
		}
	</script>

	<style scoped>
		rg-bubble, [data-is="rg-bubble"] {
			display: inline-block;
			position: relative;
		}
	</style>
</rg-bubble>
