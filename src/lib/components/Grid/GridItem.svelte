<script lang="ts">
	import type { ButtonProps } from '$types/types.js';
	import { cn } from '$lib/utils/utils.js';

	let { class: _class, children, ...props }: ButtonProps = $props();
</script>

<button
	class={cn(
		'max-tablet:text-3xl max-mobile:text-base aspect-square rounded-md border border-gray-200 bg-white px-4 py-2 text-lg font-medium transition-all duration-200 ease-in-out',
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
