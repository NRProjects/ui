<script lang="ts">
	import { cn } from '$lib/utils/utils.js';

	let { class: _class = '', children } = $props();
</script>

<div
	class="max-mobile:items-start max-mobile:p-6 flex w-full flex-grow flex-row items-center p-16"
>
	<div
		class={cn(
			'max-tablet:grid-cols-3 max-mobile:grid-cols-2 max-mobile:gap-4 grid h-full w-full grid-cols-5 gap-20',
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
