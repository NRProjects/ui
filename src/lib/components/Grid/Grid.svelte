<script lang="ts">
	import { cn } from '$lib/utils/utils.js';
	import type { Grid } from '$types/types.js';

	let { class: _class = '', children }: Grid = $props();
</script>

<div class="flex w-full flex-grow flex-row items-center p-16 max-mobile:items-start max-mobile:p-6">
	<div
		class={cn(
			'grid h-full w-full grid-cols-5 gap-20 max-tablet:grid-cols-3 max-mobile:grid-cols-2 max-mobile:gap-4',
			_class
		)}
	>
		{#if children}
			{@render children()}
		{:else}
			Grid Item
		{/if}
	</div>
</div>
