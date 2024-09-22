<script lang="ts">
	import { cn } from '$lib/utils/utils.js';
	import type { GridProps } from '$types/types.js';

	let { class: _class = '', children }: GridProps = $props();
</script>

<div
	class={cn(
		'grid h-full w-full grid-cols-5 gap-40 max-tablet:grid-cols-3 max-mobile:grid-cols-2 max-mobile:gap-4',
		_class
	)}
>
	{#if children}
		{@render children()}
	{:else}
		Grid Item
	{/if}
</div>
