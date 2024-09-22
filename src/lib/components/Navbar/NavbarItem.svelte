<script lang="ts">
	import { cn } from '$lib/utils/utils.js';
	import type { NavbarItemProps } from '$types/types.ts';

	let { class: _class, children, ...props }: NavbarItemProps = $props();
</script>

<button class={cn('text-l font-medium text-black hover:text-gray-600', _class)} {...props}>
	{#if children}
		{@render children()}
	{:else}
		Item
	{/if}
</button>
