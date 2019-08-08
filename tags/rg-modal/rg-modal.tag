<rg-modal class="{ css.root }">

	<div class="{ css.mask }" if="{ opts.modal.isvisible }" onclick="{ close }"></div>
	<div class="{ outer_style }" if="{ opts.modal.isvisible }">
		<header class="{ css.header }">
			<button if="{ opts.modal.dismissable }" type="button" class="{ css.button.close }" onclick="{ close }">
				&times;
			</button>
			<h3 class="{ css.header_title }">{ opts.modal.heading }</h3>
		</header>

		<div class="{ css.body }">
			<yield/>
		</div>

		<footer class="{ css.footer }">
			<button each="{ opts.modal.buttons }" type="button" class="{ css.button[type] }" onclick="{ action }" style="{ style }">
				{ text }
			</button>
		</footer>
	</div>

	<script>
		this.mixin(CSSMixin)
		this.scopeCSS('modal')
		this.on("mount", () => this.update())
		if (!opts.modal) opts.modal = {}

		this.close = () => {
			if (opts.modal.dismissable) {
				opts.modal.isvisible = false
				this.trigger('close')
			}
		}

		this.on("update", () => {
			this.outer_style = this.css[opts.modal.ghost? "ghost":"outer"]
		})

	</script>

	<style scoped>
		.modal--ghost .modal__footer {
			display: block;
		}
		.modal--ghost .modal__footer .button {
			margin: 0 .5em 0 0;
		}

	</style>

</rg-modal>
