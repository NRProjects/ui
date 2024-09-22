<script lang="ts">
	import { cn } from '$lib/utils/utils.js';
	import type { ComponentProps } from 'svelte';

	let {
		class: _class,
		placeholder = 'Placeholder',
		...props
	}: ComponentProps<string> = $props();
</script>

<input
	class={cn(
		'rounded-md border-2 border-transparent bg-slate-100 px-4 py-2 text-base font-medium placeholder:font-normal placeholder:italic focus:border-blue-500 focus:outline-none',
		_class
	)}
	{placeholder}
	{...props}
/>
