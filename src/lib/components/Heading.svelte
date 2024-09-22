<script lang="ts">
	import { cn } from '$lib/utils/utils.js';
	import type { HeadingProps } from '$types/types.js';

	let { class: _class, children }: HeadingProps = $props();
</script>

<h1 class={cn('max-md:text-base text-xl font-bold', _class)}>
	{#if children}
		{@render children()}
	{:else}
		Heading
	{/if}
</h1>
