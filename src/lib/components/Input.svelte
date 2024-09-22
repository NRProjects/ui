<script lang="ts">
	import { cn } from '$lib/utils/utils.js';
	import type { InputProps } from '$types/types.js';

	let { class: _class, placeholder = 'Placeholder', value = $bindable(), ...props }: InputProps = $props();

	// console.log($inspect(bind));
</script>

<input
	class={cn(
		'font-base rounded-md border-2 border-transparent bg-slate-100 px-4 py-2 text-base transition-none placeholder:font-normal placeholder:italic focus:border-blue-500 focus:outline-none',
		_class
	)}
	{placeholder}
	bind:value
	{...props}
/>
