<script lang="ts">
	import { cn } from '$lib/utils/utils.js';

	let { class: _class, children, ...props } = $props();
</script>

<button
	class={cn(
		'rounded-md border-0 bg-white px-4 py-2 text-base font-medium transition-all duration-200 ease-in-out hover:bg-gray-200',
		_class
	)}
	{...props}
>
	{#if children}
		{@render children()}
	{:else}
		Button
	{/if}
</button>
