<script lang="ts">
	import type { ButtonProps } from '$types/types.js';
	import { cn } from '$lib/utils/utils.js';

	let { class: _class, children, ...props }: ButtonProps = $props();
</script>

<button
	class={cn(
		'bg rounded-md border border-gray-200 bg-white px-4 py-2 text-base font-medium transition-all duration-200 ease-in-out hover:bg-gray-200',
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
