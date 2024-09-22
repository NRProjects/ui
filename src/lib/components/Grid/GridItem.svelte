<script lang="ts">
	import { cn } from '$lib/utils/utils.js';
	import type { GridItemProps } from '$types/types.js';

	let { class: _class, children, ...props }: GridItemProps = $props();
</script>

<button
	class={cn(
		'aspect-square rounded-md border border-gray-200 bg-white px-4 py-2 text-lg font-medium transition-all duration-200 ease-in-out max-tablet:text-3xl max-mobile:text-base',
		_class
	)}
	{...props}
>
	{#if children}
		{@render children()}
	{:else}
		Grid Item
	{/if}
</button>
